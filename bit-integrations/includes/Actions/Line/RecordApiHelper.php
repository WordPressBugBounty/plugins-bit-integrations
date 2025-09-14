<?php

namespace BitCode\FI\Actions\Line;

use BitCode\FI\Core\Util\Common;
use BitCode\FI\Core\Util\HttpHelper;
use BitCode\FI\Log\LogHandler;

class RecordApiHelper
{
    private string $accessToken;

    private string $apiEndPoint;

    private int $integrationID;

    public function __construct($apiEndPoint, $accessToken, $integrationID)
    {
        $this->apiEndPoint = $apiEndPoint;
        $this->accessToken = $accessToken;
        $this->integrationID = $integrationID;
    }

    public function execute($integrationDetails, $fieldValues)
    {
        $messages = $this->buildMessages($integrationDetails, $fieldValues);

        if (empty($messages)) {
            return ['error' => 'No valid message generated.'];
        }

        $data = ['messages' => $messages];
        $type = $integrationDetails->messageType ?? 'sendPushMessage';

        switch ($type) {
            case 'sendReplyMessage':
                $data['replyToken'] = $integrationDetails->replyToken ?? '';
                $response = $this->sendReplyMessage(json_encode($data));

                break;

            case 'sendBroadcastMessage':
                $response = $this->sendBroadcastMessage(json_encode($data));

                break;

            default:
                $data['to'] = $integrationDetails->recipientId ?? '';
                $response = $this->sendPushMessage(json_encode($data));
                $response = HttpHelper::$responseCode === 200 ? 'Push message sent successfully' : 'Failed';
        }

        $status = HttpHelper::$responseCode == 200 ? 'success' : 'error';

        LogHandler::save($this->integrationID, ['type' => 'record', 'type_name' => $type], $status, $response);

        return $response;
    }

    private function buildMessages($details, $values)
    {
        $messages = [];

        $text = $this->buildTextMessage($details, $values);
        if ($text) {
            $messages[] = $text;
        }

        if (!empty($details->sendSticker) && !empty($details->sticker_field_map)) {
            $sticker = $this->buildStickerMessage($details->sticker_field_map, $values);
            if ($sticker) {
                $messages[] = $sticker;
            }
        }

        if (!empty($details->sendImage) && !empty($details->image_field_map)) {
            $image = $this->buildImageMessage($details->image_field_map, $values);
            if ($image) {
                $messages[] = $image;
            }
        }

        if (!empty($details->sendAudio) && !empty($details->audio_field_map)) {
            $audio = $this->buildAudioMessage($details->audio_field_map, $values);
            if ($audio) {
                $messages[] = $audio;
            }
        }

        if (!empty($details->sendVideo) && !empty($details->video_field_map)) {
            $video = $this->buildVideoMessage($details->video_field_map, $values);
            if ($video) {
                $messages[] = $video;
            }
        }

        if (!empty($details->sendLocation) && !empty($details->location_field_map)) {
            $location = $this->buildLocationMessage($details->location_field_map, $values);
            if ($location) {
                $messages[] = $location;
            }
        }

        return array_values(array_filter($messages));
    }

    private function buildTextMessage($details, $values): ?array
    {
        $messageText = '';

        if (!empty($details->message_field_map)) {
            $mappedMessage = $this->mapFields($values, $details->message_field_map);
            if (!empty($mappedMessage['message'])) {
                $messageText = $mappedMessage['message'];
            }
        }

        if (empty($messageText) && !empty($details->message)) {
            $messageText = $details->message;
        }

        if (empty($messageText)) {
            return null;
        }

        $message = ['type' => 'text', 'text' => $messageText];

        if (!empty($details->sendEmojis) && !empty($details->emojis_field_map)) {
            $emoji = $this->mapFields($values, $details->emojis_field_map);

            if ($emoji['emojis_id'] ?? false) {
                $message['emojis'] = [[
                    'index'     => (int) $emoji['index'],
                    'productId' => $emoji['product_id'],
                    'emojiId'   => $emoji['emojis_id'],
                ]];
            }
        }

        return $message;
    }

    private function buildStickerMessage($map, $values): ?array
    {
        $data = $this->mapFields($values, $map);

        if (!($data['sticker_id'] ?? false)) {
            return null;
        }

        return [
            'type'      => 'sticker',
            'packageId' => $data['package_id'],
            'stickerId' => $data['sticker_id'],
        ];
    }

    private function buildImageMessage($map, $values): ?array
    {
        $data = $this->mapFields($values, $map);

        if (empty($data['originalContentUrl'])) {
            return null;
        }

        return array_filter([
            'type'               => 'image',
            'originalContentUrl' => $data['originalContentUrl'],
            'previewImageUrl'    => $data['previewImageUrl'] ?? null
        ]);
    }

    private function buildAudioMessage($map, $values): ?array
    {
        $data = $this->mapFields($values, $map);

        if (empty($data['originalContentUrl'])) {
            return null;
        }

        return array_filter([
            'type'               => 'audio',
            'originalContentUrl' => $data['originalContentUrl'],
            'duration'           => isset($data['duration']) ? (int) $data['duration'] : null
        ]);
    }

    private function buildVideoMessage($map, $values): ?array
    {
        $data = $this->mapFields($values, $map);

        if (empty($data['originalContentUrl'])) {
            return null;
        }

        return array_filter([
            'type'               => 'video',
            'originalContentUrl' => $data['originalContentUrl'],
            'previewImageUrl'    => $data['previewImageUrl'] ?? null
        ]);
    }

    private function buildLocationMessage($map, $values): ?array
    {
        $data = $this->mapFields($values, $map);

        if (empty($data['title']) || empty($data['address']) || empty($data['latitude']) || empty($data['longitude'])) {
            return null;
        }

        return [
            'type'      => 'location',
            'title'     => $data['title'],
            'address'   => $data['address'],
            'latitude'  => (float) $data['latitude'],
            'longitude' => (float) $data['longitude'],
        ];
    }

    private function mapFields($data, $fieldMap): array
    {
        $result = [];

        foreach ($fieldMap as $field) {
            $key = $field->lineFormField;

            if ($field->formField === 'custom' && !empty($field->customValue)) {
                $result[$key] = Common::replaceFieldWithValue($field->customValue, $data);
            } elseif (isset($data[$field->formField])) {
                $result[$key] = $data[$field->formField];
            }
        }

        return $result;
    }

    private function handleFilterResponse($response)
    {
        if (empty($response)) {
            return (object) ['error' => \wp_sprintf(\__('%s plugin is not installed or activated', 'bit-integrations'), 'Bit Integrations Pro')];
        }

        return $response;
    }

    private function setHeaders(): array
    {
        return [
            'Authorization' => 'Bearer ' . $this->accessToken,
            'Content-Type'  => 'application/json'
        ];
    }

    private function sendPushMessage($data)
    {
        return HttpHelper::post($this->apiEndPoint . '/message/push', $data, $this->setHeaders());
    }

    private function sendReplyMessage($data)
    {
        $response = \apply_filters('btcbi_line_reply_message', false, $data, $this->setHeaders(), $this->apiEndPoint);

        return static::handleFilterResponse($response);
    }

    private function sendBroadcastMessage($data)
    {
        $response = \apply_filters('btcbi_line_broadcast_message', false, $data, $this->setHeaders(), $this->apiEndPoint);

        return static::handleFilterResponse($response);
    }
}

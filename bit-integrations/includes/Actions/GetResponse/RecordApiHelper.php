<?php

/**
 * GetResponse    Record Api
 */

namespace BitCode\FI\Actions\GetResponse;

use BitCode\FI\Log\LogHandler;
use BitCode\FI\Core\Util\Common;
use BitCode\FI\Core\Util\Helper;
use BitCode\FI\Core\Util\HttpHelper;

/**
 * Provide functionality for Record insert, upsert
 */
class RecordApiHelper
{
    private $_integrationID;

    private $_integrationDetails;

    private $_defaultHeader;

    private $baseUrl = 'https://api.getresponse.com/v3/';

    public function __construct($integrationDetails, $integId)
    {
        $this->_integrationDetails = $integrationDetails;
        $this->_integrationID = $integId;
        $this->_defaultHeader = [
            'X-Auth-Token' => 'api-key ' . $this->_integrationDetails->auth_token
        ];
    }

    public function existSubscriber($auth_token, $email)
    {
        if (empty($auth_token)) {
            wp_send_json_error(
                __(
                    'Requested parameter is empty',
                    'bit-integrations'
                ),
                400
            );
        }

        $apiEndpoints = $this->baseUrl . "contacts?query[email]={$email}";

        $response = HttpHelper::get($apiEndpoints, null, $this->_defaultHeader);

        if (empty($response)) {
            return false;
        }

        return $response;
    }

    public function addContactToCampaign($auth_token, $selectedTags, $finalData, $campaign)
    {
        if (empty($finalData['email'])) {
            return ['success' => false, 'message' => __('Required field Email is empty', 'bit-integrations'), 'code' => 400];
        }

        $apiEndpoints = $this->baseUrl . 'contacts';
        $requestParams = [
            'email'    => $finalData['email'],
            'campaign' => $campaign,
        ];

        if (!empty($selectedTags)) {
            $splitSelectedTags = explode(',', $selectedTags);

            foreach ($splitSelectedTags as $tag) {
                $requestParams['tags'][] = ['tagId' => $tag];
            }
        }

        if (isset($this->_integrationDetails->dayOfCycle) && Helper::proActionFeatExists('GetResponse', 'autoResponderDay')) {
            $requestParams = apply_filters('btcbi_getresponse_autoresponder_day', $requestParams, $this->_integrationDetails->dayOfCycle);
        }

        foreach ($finalData as $key => $value) {
            if ($key === 'email') {
                continue;
            }

            if ($key === 'name') {
                $requestParams[$key] = $value;
            } else {
                $requestParams['customFieldValues'][] = (object) [
                    'customFieldId' => $key,
                    'value'         => (array) $value
                ];
            }
        }

        $isExist = $this->existSubscriber($auth_token, $finalData['email']);
        $shouldUpdate = !empty($existing[0]->contactId) && !empty($this->_integrationDetails->actions->update);

        if ($shouldUpdate) {
            $contactId = $isExist[0]->contactId;
            $apiEndpoints = $this->baseUrl . "contacts/{$contactId}";

            $requestParams['tags'] = $this->getFormattedTags($contactId, $requestParams['tags']);

            return HttpHelper::post($apiEndpoints, $requestParams, $this->_defaultHeader);
        }

        return HttpHelper::post($apiEndpoints, $requestParams, $this->_defaultHeader);
    }

    public function generateReqDataFromFieldMap($data, $fieldMap)
    {
        $dataFinal = [];

        foreach ($fieldMap as $value) {
            $triggerValue = $value->formField;
            $actionValue = $value->getResponseFormField;
            if ($triggerValue === 'custom') {
                $dataFinal[$actionValue] = Common::replaceFieldWithValue($value->customValue, $data);
            } elseif (!\is_null($data[$triggerValue])) {
                $dataFinal[$actionValue] = $data[$triggerValue];
            }
        }

        return $dataFinal;
    }

    public function execute(
        $selectedTag,
        $type,
        $fieldValues,
        $fieldMap,
        $auth_token,
        $campaign
    ) {
        $finalData = $this->generateReqDataFromFieldMap($fieldValues, $fieldMap);
        $apiResponse = $this->addContactToCampaign($auth_token, $selectedTag, $finalData, $campaign);

        if ($apiResponse->contactId) {
            $updatedContactId = $apiResponse->contactId;
            $apiResponse = null;
        }
        if ($apiResponse == null) {
            $res = ['message' => $updatedContactId ? 'Contact updated successfully' : 'Contact created successfully'];
            LogHandler::save($this->_integrationID, wp_json_encode(['type' => 'contact', 'type_name' => $updatedContactId ? 'update-contact' : 'add-contact']), 'success', wp_json_encode($res));
        } else {
            LogHandler::save($this->_integrationID, wp_json_encode(['type' => 'contact', 'type_name' => $apiResponse->code == 1008 ? 'update-contact' : 'add-contact']), 'error', wp_json_encode($apiResponse));
        }

        return $apiResponse;
    }

    private function getFormattedTags($contactId, $tags = [])
    {
        $contactEndpoint = $this->baseUrl . "contacts/{$contactId}";
        $contactResponse = HttpHelper::get($contactEndpoint, null, $this->_defaultHeader);

        if (empty($contactResponse->tags)) {
            return $tags;
        }

        foreach ($contactResponse->tags as $existingTag) {
            $tags[] = ['tagId' => $existingTag->tagId];
        }

        return array_unique($tags, SORT_REGULAR);
    }
}

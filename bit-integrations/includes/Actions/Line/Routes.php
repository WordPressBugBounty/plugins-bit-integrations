<?php

if (!defined('ABSPATH')) {
    exit;
}

use BitCode\FI\Actions\Line\LineController;
use BitCode\FI\Core\Util\Route;

Route::post('line_authorization', [LineController::class, 'authorization']);

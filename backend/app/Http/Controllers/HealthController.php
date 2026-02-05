<?php

namespace App\Http\Controllers;

use App\Health\HealthChecker;
use Illuminate\Http\JsonResponse;

final class HealthController
{
    public function __invoke(HealthChecker $checker): JsonResponse
    {
        $result = $checker->check();

        if ($result['ok'] === true) {
            return response()->json(['ok' => true], 200);
        }

        return response()->json(
            ['ok' => false, 'message' => $result['message'] ?? 'Unhealthy'],
            503
        );
    }
}

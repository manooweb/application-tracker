<?php

namespace App\Http\Controllers;

use App\Health\HealthChecker;
use Illuminate\Foundation\Events\DiagnosingHealth;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Event;
use Illuminate\View\View;

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

    public static function checkApi(): View
    {
        $exception = null;

        try {
            Event::dispatch(new DiagnosingHealth);
        } catch (\Throwable $e) {
            report($e);
            $exception = $e->getMessage();
        }

        return view('home', [
            'copyrightStartYear' => '2025',
            'copyrightEndYear' => date('Y'),
            'healthy' => $exception === null,
            'healthMessage' => $exception,
        ]);
    }
}

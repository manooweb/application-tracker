<?php

namespace App\Health;

final class DefaultHealthChecker implements HealthChecker
{
    public function check(): array
    {
        // Minimal version (MVP): if the app is up, it's healthy.
        // You can later add DB/Redis checks here without changing controller/tests style.
        return ['ok' => true];
    }
}

<?php

namespace App\Health;

interface HealthChecker
{
    /**
     * @return array{ok: bool, message?: string|null}
     */
    public function check(): array;
}

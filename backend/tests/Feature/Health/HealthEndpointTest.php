<?php

namespace Tests\Feature;

use App\Health\HealthChecker;
use Tests\TestCase;

final class HealthEndpointTest extends TestCase
{
    public function test_it_returns_ok_true_when_healthy(): void
    {
        $this->bindHealthChecker(['ok' => true]);

        $this->getJson('/api/health')
            ->assertOk()
            ->assertExactJson(['ok' => true]);
    }

    public function test_it_returns_503_and_message_when_unhealthy(): void
    {
        $this->bindHealthChecker(['ok' => false, 'message' => 'Database connection failed']);

        $this->getJson('/api/health')
            ->assertStatus(503)
            ->assertExactJson([
                'ok' => false,
                'message' => 'Database connection failed',
            ]);
    }

    /**
     * @param  array{ok: bool, message?: string}  $result
     */
    private function bindHealthChecker(array $result): void
    {
        $this->app->bind(HealthChecker::class, fn () => new class($result) implements HealthChecker
        {
            public function __construct(private array $result) {}

            public function check(): array
            {
                return $this->result;
            }
        });
    }
}

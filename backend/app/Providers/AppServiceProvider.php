<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Health\HealthChecker;
use App\Health\DefaultHealthChecker;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(HealthChecker::class, DefaultHealthChecker::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}

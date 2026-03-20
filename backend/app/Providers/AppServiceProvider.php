<?php

namespace App\Providers;

use App\Health\DefaultHealthChecker;
use Illuminate\Support\Facades\URL;
use App\Health\HealthChecker;
use Illuminate\Support\ServiceProvider;

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
        URL::forceScheme('https');
    }
}

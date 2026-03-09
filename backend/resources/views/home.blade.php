<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ __('home.title') }}</title>

    <link rel="stylesheet" href="{{ asset('css/home.css') }}">
    <script src="{{ asset('js/matomo-api.js') }}" defer></script>
</head>

<body>
    <main class="main">
        <h1><a href="/">{{ __('home.title') }}</a></h1>
    </main>

    <div class="app-container">
        <p>{{ __('home.status_label') }}: <strong>
        @if ($healthy)
            {{ __('home.status_up') }} ✅
        @else
            {{ __('home.status_down') }} ❌
        @endif
        </strong></p>
    </div>
    <footer class="app-footer">
        <div class="app-footer__inner">
            <span class="app-footer__muted">
                © {{ $copyrightStartYear }} - {{ $copyrightEndYear }} Manooweb
            </span>
            <nav class="app-footer__links" aria-label="Legal links">
                <a href="{{ config('job.legal_notice_url') }}" target="_blank">{{ __('home.legal_notice') }}</a>
                <span class="app-footer__muted">•</span>
                <a href="{{ config('job.privacy_policy_url') }}" target="_blank">{{ __('home.privacy_policy') }}</a>
            </nav>
        </div>
    </footer>

</html>

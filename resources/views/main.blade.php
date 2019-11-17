<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    {{--THEME--}}

    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#0E0D10">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#0E0D10">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name=apple-mobile-web-app-status-bar-style content=#0E0D10>
    <meta name="theme-color" content="#ffffff">

    <link rel="preload" href="{{mix('js/app.js')}}" as="script">

    {{--ICONS--}}

    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('/favicons/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('/favicons/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('/favicons/favicon-16x16.png')}}">
    <link rel="manifest" href="{{asset('/favicons/manifest.json')}}">
    <link rel="mask-icon" href="{{asset('/favicons/safari-pinned-tab.svg')}}" color="#65afc4">

    {{----}}

    {{--SEO--}}

    <meta name="yandex-verification" content="8bbc3711b424bf7e" />

    <meta name="author" content="Artur Voloshyn">
    <meta name="robots" content="all" />
    <meta name="description" content="{{ $meta['description'] }}">
    <meta name="keywords" content="{{ $meta['keywords'] }}">
    <title>{{ $meta['title'] }}</title>

    {{----}}


    {{--OpenGraph--}}

    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ env('APP_URL') }}">
    <meta property="og:title" content="{{ $meta['title'] }}">
    <meta property="og:description" content="{{ $meta['description'] }}">
    <meta property="og:image" content="{{ asset('imgs/logo.png') }}">

    {{----}}

    <meta name="csrf-token" content="{{ csrf_token() }}">

    @include('parts.fonts')

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body>

<div id="app">
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js" integrity="sha256-oI+elz+sIm+jpn8F/qEspKoKveTc5uKeFHNNVexe6d8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha256-0rguYS0qgS6L4qVzANq4kjxPLtvnp5nn2nB5G1lWRv4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/classie/1.0.1/classie.min.js" integrity="sha256-6O5DljdGA6AiaEVC/Zn8pNLNbQGparYTI9091fGX64k=" crossorigin="anonymous"></script>

<script src="{{mix('js/app.js')}}"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id={{ env('GOOGLE_ANALYTIC') }}"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '{{ env('GOOGLE_ANALYTIC') }}');
</script>

</body>

</html>

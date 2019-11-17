<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Voloshyn Artur | Web Master</title>

    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('/favicons/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('/favicons/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('/favicons/favicon-16x16.png')}}">
    <link rel="manifest" href="{{asset('/favicons/manifest.json')}}">
    <link rel="mask-icon" href="{{asset('/favicons/safari-pinned-tab.svg')}}" color="#65afc4">
    <meta name="theme-color" content="#ffffff">
    <link href="{{asset('css/NotFound.css')}}" rel="stylesheet"
          type="text/css">
<body>
<div class="container">
    <form class="four-oh-four-form">
        <input type="text" class="404-input" autofocus>
    </form>

    <div class="terminal">
        <p class="prompt">The page you requested cannot be found right meow. Try typing 'to home'.</p>
        <p class="prompt output new-output"></p>
    </div>
</div>
<script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>
<script src="{{asset('js/libraries/NotFound.js')}}"></script>
</body>
</html>

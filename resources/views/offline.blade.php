<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="theme-color" content="#ffffff" />

    <title>{{ $meta['title'] }}</title>

    <link rel="manifest" href="{{ asset('manifest.json') }}" />
    <link rel="stylesheet" href="{{ asset('css/Offline.css') }}" />
  </head>

  <body>

    <noscript>You need to enable JavaScript to run this app.</noscript>

    <header class="header">
      <h1>
        <a href="{{ url('/') }}">
          ARTUR VOLOSHYN
        </a>
      </h1>
    </header>

    <main class="main">

      <div class="offline-card">
        <img src="{{ asset('favicons/panda.png') }}" class="offline-panda" alt="panda" />
        <div class="description">
          Oops, you appear to be offline, this app requires an internet connection.
        </div>
      </div>

    </main>

    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("{{ asset('service-worker.js') }}", {
            scope: '.'
          }).then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }).catch(err => {
            console.log('ServiceWorker registration failed: ', err);
          });
        });
      }
    </script>

  </body>

</html>

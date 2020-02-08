<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <meta name="theme-color" content="#ffffff" />

      <title>{{ $meta['title'] }}</title>

      <link rel="manifest" href="{{ asset('favicons/manifest.json') }}">

      <style>
          * {
              box-sizing: border-box;
          }

          html,
          body {
              padding: 0;
              margin: 0;
              height: 100%;
              width: 100%;
              font-family: 'Helvetica', 'Verdana', sans-serif;
              font-weight: 400;
              font-display: optional;
              color: #444;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
          }

          html {
              overflow: hidden;
          }

          body {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
              -webkit-flex-wrap: nowrap;
              -ms-flex-wrap: nowrap;
              flex-wrap: nowrap;
              -webkit-box-pack: start;
              -webkit-justify-content: flex-start;
              -ms-flex-pack: start;
              justify-content: flex-start;
              -webkit-box-align: stretch;
              -webkit-align-items: stretch;
              -ms-flex-align: stretch;
              align-items: stretch;
              -webkit-align-content: stretch;
              -ms-flex-line-pack: stretch;
              align-content: stretch;
              background: #ececec;
          }

          .header {
              width: 100%;
              height: 56px;
              color: #FFF;
              background: #3F51B5;
              position: fixed;
              font-size: 20px;
              box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);
              padding: 16px 16px 0 16px;
              will-change: transform;
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-orient: horizontal;
              -webkit-box-direction: normal;
              -webkit-flex-direction: row;
              -ms-flex-direction: row;
              flex-direction: row;
              -webkit-flex-wrap: nowrap;
              -ms-flex-wrap: nowrap;
              flex-wrap: nowrap;
              -webkit-box-pack: start;
              -webkit-justify-content: flex-start;
              -ms-flex-pack: start;
              justify-content: flex-start;
              -webkit-box-align: stretch;
              -webkit-align-items: stretch;
              -ms-flex-align: stretch;
              align-items: stretch;
              -webkit-align-content: center;
              -ms-flex-line-pack: center;
              align-content: center;
              -webkit-transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
              transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
              transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
              z-index: 1000;
          }

          .header h1 {
              font-weight: 400;
              font-size: 20px;
              margin: 0;
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              -ms-flex: 1;
              flex: 1;
          }

          .header h1 a {
              text-decoration: none;
              color: #FFF;
          }

          .main {
              padding-top: 60px;
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              -ms-flex: 1;
              flex: 1;
              overflow-x: hidden;
              overflow-y: auto;
              -webkit-overflow-scrolling: touch;
          }

          .offline-card {
              padding: 16px;
              position: relative;
              box-sizing: border-box;
              background: #fff;
              border-radius: 2px;
              margin: 16px;
              box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
          }

          .offline-panda {
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 1.5em;
              display: block;
          }

          .description {
              text-align: center;
          }

      </style>
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
                <img
                    src="{{ asset('favicons/panda.png') }}"
                    class="offline-panda" alt="panda">
                <div class="description">
                    Oops, you appear to be offline, this app requires an internet
                    connection.
                </div>
            </div>

        </main>

        <script>
            if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                    navigator.serviceWorker.register("{{ asset('service-worker.js') }}", {
                        scope: '.'
                    })
                    .then(registration => console.log('ServiceWorker registration successful with scope: ', registration.scope))
                    .catch(err => console.log('ServiceWorker registration failed: ', err));
                });
            }
        </script>

    </body>

</html>

# Portfolio Application

My own portfolio build on React and Laravel

[Demo](https://arturvoloshyn.herokuapp.com/)

## To clone

- You'll need to have [git](https://git-scm.com/), [node](https://nodejs.org/en/), [php 7.2](https://www.php.net/), [mySQL](https://www.mysql.com/), [composer](https://getcomposer.org/) and [libpng](http://www.libpng.org/pub/png/libpng.html) installed in
  your system.

`git clone https://github.com/ArturW1998/Portfolio.git`

## Back-end

### Provides

- php 7.x
- laravel 5.x

### To install

- Then install the dependencies:

`composer install` / `php composer.phar install`

- Copy `.env.dist` as `.env`

- Replace the database and mail connection strings in the .env file

- Migrate:

`php artisan migrate`

### Run development server

- laravel 5.x

`php artisan serve`

Open the web browser to `http://127.0.0.1:8000/`

### Unit Testing

- phpunit 6.x

To run tests using PHPUnit:

`php artisan test`

## Front-end

### Provides

- react ^16.x
- redux 4.x

### To install

- Then install the dependencies:

`npm install`

### Run development server

- webpack-dev-server 2.x
- react-hot-loader 4.x
- redux-devtools (with browser plugin)

`npm run dev`

Open the web browser to `http://localhost:3000/`

### To build the production package

- webpack 3.x
- babel 6.x

`npm run prod`

### Code Quality

- eslint 6.x
- stylelint 12.x
- prettier 1.x

To do the actual linting and formatting, run:

`npm run lint` / `npm run lint:styles` / `npm run format` / `npm run format:styles`

### Unit Testing

- jest 23.x
- enzyme 3.x

To run tests using Jest and Enzyme:

`npm test`

## Contribute

Please contribute to the project if you know how to make it better, including this README :)

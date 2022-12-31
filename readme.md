# Portfolio Application

My own portfolio build on React

[Demo](https://ArturW1998.github.io/Portfolio)

## To clone

- You'll need to have [git](https://git-scm.com/), [node](https://nodejs.org/en/),
  [php 7.2](https://www.php.net/), [mySQL](https://www.mysql.com/),
  [composer](https://getcomposer.org/) and [libpng](http://www.libpng.org/pub/png/libpng.html)
  installed in your system.

`git clone https://github.com/ArturW1998/Portfolio.git`

## Provides

- react ^16.x
- redux 4.x

### To install

- Copy `.env.dist` as `.env`

- Replace the values of the environment variables with your own in the `.env` file

- Then install the dependencies:

`npm install`

### Run development server

- webpack-dev-server 3.x
- redux-devtools (with browser plugin)

`npm run dev`

Open the web browser to `http://localhost:3000/`

### To build the production package

- webpack 4.x
- babel 6.x

`npm run prod`

### Code Quality

- eslint 6.x
- stylelint 12.x
- prettier 1.x

To do the actual linting and formatting, run:

`npm run lint` / `npm run lint:styles` / `npm run format` / `npm run format:styles`

### Unit Testing

- jest 24.x

To run tests using Jest:

`npm test`

## Contribute

Please contribute to the project if you know how to make it better, including this README :)

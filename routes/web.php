<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/sitemap', 'SiteMapController@index');

Route::get('/', function () {

    $meta = [
        'title' => 'Artur Voloshyn | Software Engineer - Official website',
        'description' => 'The official site of the professional web developer Artur Voloshyn. Development and optimization of web applications of any complexity.',
        'keywords' => 'Artur Voloshyn, Voloshyn, official website, website development, Application Development',
    ];

    return view('main', ['meta' => $meta]);
})->name('main');

Route::get('/portfolio', function () {

    $meta = [
        'title' => 'Artur Voloshyn | Software Engineer - Portfolio',
        'description' => 'List of developed projects, frontend and backend parts of web applications.',
        'keywords' => 'Artur Voloshyn, Voloshyn, official website, portfolio, project list, backend, frontend',
    ];

    return view('main', ['meta' => $meta]);
})->name('portfolio');

Route::get('/skills', function () {

    $meta = [
        'title' => 'Artur Voloshyn | Software Engineer - Skills',
        'description' => 'The official site of the professional web developer Artur Voloshyn. List of technologies and skills.',
        'keywords' => 'Artur Voloshyn, Voloshyn, official website, web technologies, my skills',
    ];

    return view('main', ['meta' => $meta]);

})->name('skills');

Route::get('/contacts', function () {

    $meta = [
        'title' => 'Artur Voloshyn | Software Engineer - Contact me',
        'description' => 'The official site of the professional web developer Artur Voloshyn. Contact form with me.',
        'keywords' => 'Artur Voloshyn, Voloshyn, official website, Feedback, contact me',
    ];

    return view('main', ['meta' => $meta]);

})->name('contacts');

Route::get('/offline', function () {

    $meta = [
        'title' => 'Artur Voloshyn | Software Engineer - Offline page',
        'description' => 'The official site of the professional web developer Artur Voloshyn. Offline page.',
        'keywords' => 'Artur Voloshyn, Voloshyn, official website, offline page',
    ];

    return view('offline', ['meta' => $meta]);

})->name('offline');


Route::post('mail', 'MailController@index');

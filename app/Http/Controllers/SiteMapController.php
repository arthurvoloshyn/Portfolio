<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;

class SiteMapController extends Controller
{
    public function index(){

        // create new sitemap object
        $sitemap = App::make('sitemap');

        // set cache key (string), duration in minutes (Carbon|Datetime|int), turn on/off (boolean)
        // by default cache is disabled
//        $sitemap->setCache('laravel.sitemap', 60);

        // check if there is cached sitemap and build new only if is not
        if (!$sitemap->isCached()) {

            $sitemap->add(route('main'), '2012-08-25T20:10:00+02:00', '1.0', 'daily');

            $sitemap->add(route('portfolio'), '2012-08-25T20:10:00+02:00', '0.8', 'daily');

            $sitemap->add(route('skills'), '2012-08-25T20:10:00+02:00', '0.7', 'daily');

            $sitemap->add(route('contacts'), '2012-08-25T20:10:00+02:00', '0.5', 'daily');

        }

        // show your sitemap (options: 'xml' (default), 'html', 'txt', 'ror-rss', 'ror-rdf')
        return $sitemap->render('xml');


    }
}

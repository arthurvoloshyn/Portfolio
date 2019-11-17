<?php

namespace App\Http\Controllers;

use Mail;
use Config;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MailController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int $id
     * @return Response
     */
    public function Index(Request $request)
    {

        Mail::send('emails.new', ['body' => $request->body, 'user' => $request->username, 'email' => $request->email], function ($m) use ($request) {
            $m->from($request->email, 'New person in your life');

            $m->to(Config::get('mail.from.address'), 'Voloshyn Artur')->subject($request->subject);
        });
    }
}

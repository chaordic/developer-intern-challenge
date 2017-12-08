<?php

namespace App\Http\Controllers;

use App\Url;

use Illuminate\Support\Facades\Redirect;

class RedirectController extends Controller
{
    public function redirect($url)
    {
        $full_url = url('/') . '/' . $url;
        $url = Url::where('short_url', $full_url)->first();
        if ($url == null) {
            return 'Error 404 - Page not found';
        }
        $url->hits++;
        $url->save();
        return Redirect::away(urldecode($url->url));
    }
}

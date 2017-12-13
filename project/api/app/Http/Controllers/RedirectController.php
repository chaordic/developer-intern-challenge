<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Url;

use Illuminate\Support\Facades\Redirect;

class RedirectController extends Controller
{
    public function redirect($url)
    {
        $url = Url::where('short_url', $url)->first();
        $url->hits++;
        $url->save();
        return Redirect::to(urldecode($url->url));
    }
}

<?php

namespace App\Http\Controllers;

use App\Url;
use Illuminate\Http\Request;

class HitController extends Controller
{
    public function index(Request $request)
    {
        $totalHits = Url::sum('hits');
        $response = (object)['hits' => $totalHits];
        return json_encode($response);
    }
}

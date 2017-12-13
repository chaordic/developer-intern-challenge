<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUrlRequest;
use App\Url;

use Illuminate\Http\Request;

class UrlController extends Controller
{

    public function index(Request $request)
    {
        $request_url = $request->input('url');

        if ($request_url !== null) {
            $request_url = $this->format_url($request_url);

            $url = Url::where('url', $request_url)->first();

            if ($url === null) {
                return response($request_url, 204);
            }

            return json_encode($this->transform($url));
        }

        $urls = Url::MostHits()->limit(5)->get()->map(
            function ($url) {
                return $this->transform($url);
            }
        );
        return json_encode($urls);
    }

    public function show(Url $url)
    {
        return json_encode($this->transform($url));
    }

    public function store(StoreUrlRequest $request)
    {
        $request_url = $this->add_protocol($request->url);
        $url = Url::where('url', $request_url)->first();

        if ($url === null) {
            $url = new Url;

            $url->hits = 0;
            $url->url = $request_url;
            $url->short_url = url('/') . '/' . $this->gen_id();

            $url->save();
        }

        return json_encode($this->transform($url));
    }

    private function transform($url)
    {
        $url->shortUrl = $url->short_url;
        unset($url->short_url);
        return $url;
    }

    private function gen_id()
    {
        do {
            $random = '';
            for ($i = 0; $i < 5; $i++) {
                $random .= rand(0, 1) ? rand(0, 9) : chr(rand(ord('a'), ord('z')));
            }
            $url = Url::where('short_url', $random)->first();
        } while ($url !== null);
        return $random;
    }

    private function add_protocol($url)
    {
        $url = urldecode($url);
        $url = rtrim($url, '/');
        if (strpos($url, 'https://') !== false) {
            return $url;
        } else if (strpos($url, 'http://') !== false) {
            return $url;
        }
        $url = 'http://' . $url;
        return $url;
    }

}

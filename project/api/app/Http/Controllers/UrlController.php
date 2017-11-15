<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUrlRequest;
use App\Transformers\UrlTransformer;
use App\Url;

use Illuminate\Http\Request;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;

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

            return fractal()
                ->item($url)
                ->transformWith(new UrlTransformer)
                ->toArray();
        }

        $urls = Url::MostHits()->paginate(5);
        $urlsCollection = $urls->getCollection();

        return fractal()
            ->collection($urlsCollection)
            ->paginateWith(new IlluminatePaginatorAdapter($urls))
            ->transformWith(new UrlTransformer)
            ->toArray();
    }

    public function show(Url $url)
    {
        return fractal()
            ->item($url)
            ->transformWith(new UrlTransformer)
            ->toArray();
    }

    public function store(StoreUrlRequest $request)
    {
        $request_url = $this->format_url($request->url);
        $url = Url::where('url', $request_url)->first();

        if ($url === null) {
            $url = new Url;

            $url->hits = 0;
            $url->url = $request_url;
            $url->short_url = $this->gen_id();

            $url->save();
        }

        return fractal()
            ->item($url)
            ->transformWith(new UrlTransformer)
            ->toArray();
    }

    private function format_url($url)
    {
        $url = urldecode($url);
        $url = rtrim($url, '/');
        $contains_protocol = false;
        if (strpos($url, 'https://') !== false) {
            $contains_protocol = true;
        } else if (strpos($url, 'http://') !== false) {
            $contains_protocol = true;
        }
        if (!$contains_protocol) {
            $existent_url = Url::where('url', 'https://' . $url)->first();
            if ($existent_url === null) {
                $url = 'http://' . $url;
            } else {
                $url = 'https://' . $url;
            }
        }
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

}

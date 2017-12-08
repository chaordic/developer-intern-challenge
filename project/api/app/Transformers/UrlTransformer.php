<?php

namespace App\Transformers;

use App\Url;

class UrlTransformer extends \League\Fractal\TransformerAbstract
{
    public function transform(Url $url)
    {
        $base_url = url('/');

        return [
            'id' => $url->id,
            'hits' => $url->hits,
            'url' => $url->url,
            'shortUrl' => $base_url . '/' . $url->short_url
        ];
    }
}
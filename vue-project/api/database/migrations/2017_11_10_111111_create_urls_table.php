<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUrlsTable extends Migration
{
    public function up()
    {
        Schema::create('urls', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('hits')->unsigned()->default(0);
            $table->string('url')->unique()->index();
            $table->string('short_url')->unique()->index();
        });
        $json_file_path = 'https://raw.githubusercontent.com/chaordic/developer-intern-challenge/master/Assets/urls.json';
        $urls_json = file_get_contents($json_file_path);
        $urls = json_decode($urls_json, true);
        $urls = array_map(
            function ($url) {
                return array(
                    'id' => $url['id'],
                    'hits' => $url['hits'],
                    'url' => $url['url'],
                    'short_url' => $url['shortUrl']
                );
            }, $urls);

        DB::table('urls')->insert(
            $urls
        );
    }

    public function down()
    {
        Schema::dropIfExists('urls');
    }
}

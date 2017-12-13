<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'urls'], function () {
    Route::get('/', 'UrlController@index');
    Route::get('/{url}', 'UrlController@show');
    Route::post('/', 'UrlController@store');
});

Route::group(['prefix' => 'hits'], function () {
    Route::get('/', 'HitController@index');
    Route::post('/', 'HitController@store');
});

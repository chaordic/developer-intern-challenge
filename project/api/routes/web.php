<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/{url}', 'RedirectController@redirect');

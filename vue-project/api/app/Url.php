<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Orderable;

class Url extends Model
{
    use Orderable;

    public $timestamps = false;
}

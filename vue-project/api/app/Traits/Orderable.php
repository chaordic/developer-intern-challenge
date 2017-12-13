<?php

namespace App\Traits;

trait Orderable
{
    public function scopeMostHits($query)
    {
        return $query->orderBy('hits', 'desc');
    }
}
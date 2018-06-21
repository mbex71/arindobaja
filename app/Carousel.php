<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Carousel extends Model
{
    use SoftDeletes;
    
    protected $fillable = ['name','status','url','location'];

    public $timestamps = true;
    
    protected $dates = ['deleted_at'];
}

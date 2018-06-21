<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Value extends Model
{
    use SoftDeletes;

    protected $fillable = ['title','desc','imgurl'];

    public $timestamps = true;

    protected $dates = ['deleted_at'];
}

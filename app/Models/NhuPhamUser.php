<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NhuPhamUser extends Model
{
    use SoftDeletes;

    protected $fillable = ['name'];
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}

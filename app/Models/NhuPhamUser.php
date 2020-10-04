<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NhuPhamUser extends Model
{
    protected $fillable = ['name'];
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}

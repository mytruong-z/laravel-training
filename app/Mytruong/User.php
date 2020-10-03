<?php

namespace App\Mytruong;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'mytruong_users';
    public $timestamps = true;

    protected $fillable = [
        'id',
        'name'
    ];

}

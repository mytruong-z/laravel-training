<?php

namespace App\sendoan;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'sendoan_users';
    protected $fillable = ['id', 'name'];
}

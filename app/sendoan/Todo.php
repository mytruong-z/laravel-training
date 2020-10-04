<?php

namespace App\sendoan;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $table = 'sendoan_todos';
    protected $fillable = ['id', 'user_id', 'title', 'complete'];
}

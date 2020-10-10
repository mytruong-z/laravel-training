<?php

namespace App\Mytruong;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $table = 'mytruong_todos';
    public $timestamps = true;

    protected $fillable = [
        'id',
        'userId',
        'title',
        'completed'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}

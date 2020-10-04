<?php

namespace App\Http\Controllers\sendoan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\sendoan\Todo;
use App\sendoan\User;

class ApiController extends Controller
{
    public function userList()
    {
        $users = User::select('id', 'name')->get();

        return [
            'status' => 'success',
            'code'   => 200,
            'data'   => $users
        ];
    }

    public function todoList($userId)
    {
        $todos = Todo::select('id', 'user_id', 'title', 'completed')
            ->where('user_id', '=', $userId)
            ->get();

        return [
            'status' => 'success',
            'code'   => 200,
            'data'   => $todos
        ];
    }
}

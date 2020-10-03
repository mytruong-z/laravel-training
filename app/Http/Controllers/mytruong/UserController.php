<?php

namespace App\Http\Controllers\mytruong;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Mytruong\User;

class UserController extends Controller
{
    public function showAllUser() {
        $rs = User::select('id', 'name')->get();
        return $rs;
    }
}

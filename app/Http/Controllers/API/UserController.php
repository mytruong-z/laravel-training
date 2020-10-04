<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\User\StoreRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::orderBy('id', 'DESC')->paginate(20);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        $user = new User();
        $user->email = $request->post('email');
        $user->name = $request->post('name');
        $user->password = Hash::make('the-password-of-choice');
        if($user->save()) {
            return response()->json(['data' => $user], 201);
        }
        return response()->json(['data' => []], 501);

    }
}

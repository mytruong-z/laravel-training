<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\NhuPhamUser;
use Illuminate\Http\Request;

class NhuPhamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = NhuPhamUser::all();
        return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = NhuPhamUser::create($request->all());
        return response()->json($user, 201);
    }
}

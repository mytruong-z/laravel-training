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
        return NhuPhamUser::all();
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

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\NhuPhamUser  $nhuPhamUser
     * @return \Illuminate\Http\Response
     */
    public function show(NhuPhamUser $nhuPhamUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\NhuPhamUser  $nhuPhamUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, NhuPhamUser $nhuPhamUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NhuPhamUser  $nhuPhamUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(NhuPhamUser $nhuPhamUser)
    {
        //
    }
}

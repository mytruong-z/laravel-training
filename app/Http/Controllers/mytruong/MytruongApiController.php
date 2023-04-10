<?php

namespace App\Http\Controllers\mytruong;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Mytruong\Todo;

class MytruongApiController extends Controller
{
    public function create(Request $request) {
        $request->validate([
            'userId' => 'required',
            'title'  => 'required',
        ]);
        $todo = new Todo([
            'userId' => $request->post('userId'),
            'title' => $request->post('title'),
            'completed' => false
        ]);
        $todo->save();
        return $todo;
    }

    public function delete(Request $request) {
        $id = $request->post('id');
        if($id) {
            $todo = Todo::find($id);
            $todo->delete();
        }
        return $id;
    }

    public function showByUser($userId) {
        $rs = Todo::where('userId', $userId)
                  ->select('id', 'userId', 'title', 'completed')
                  ->get();
        return $rs;
    }

    public function complete(Request $request) {
        $id = $request->post('id');
        $todo = Todo::find($id);
        $todo->completed = true;
        $todo->save();
        return $todo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

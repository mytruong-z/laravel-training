<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 10/2/20
 * Time: 5:02 PM
 */

namespace App\Http\Controllers\mytruong;
use Illuminate\Http\Request;
use App\Mytruong\Todo;

class TodoController
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
}
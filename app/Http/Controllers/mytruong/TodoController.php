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
    }

    public function delete($id) {
        $todo = Todo::find($id);
        $todo->delete();
    }

    public function showByUser($userId) {
        $rs = Todo::where('userId', $userId)
            ->select('id', 'userId', 'title', 'completed')
            ->get();
        return $rs;
    }

}
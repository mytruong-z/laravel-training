<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('mytruong-get-todo-list/{userId}', 'mytruong\TodoController@showByUser');
Route::get('mytruong-get-user-list', 'mytruong\UserController@showAllUser');
Route::post('mytruong-add-todo', 'mytruong\TodoController@create');

Route::get('nhuphamusers', [\App\Http\Controllers\API\NhuPhamController::class, 'index']);
Route::post('nhuphamusers/create', [\App\Http\Controllers\API\NhuPhamController::class, 'store']);

Route::group(['prefix' => 'khoa'], function () {
    Route::get('/user', [UserController::class, 'index'])->name('khoa.user');
    Route::post('/user', [UserController::class, 'store'])->name('khoa.user.create');
});



Route::group(['prefix' => 'sendoan'], function () {
    Route::get('users', [ApiController::class, 'userList'])->name('user.list');
    Route::get('user/{userId}/todos', [ApiController::class, 'todoList'])->name('user.todos');
});
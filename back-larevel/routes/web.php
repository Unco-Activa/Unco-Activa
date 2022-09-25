<?php

use App\Http\Controllers\UserController;
use App\Models\Inscription;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages.index');
});

Route::get('/pre-inscripciones', function () {
    return view('pages.pre-inscripciones');
});

//Log User Out
Route::get('/logout', [UserController::class, 'logout'])->middleware('auth');
//show login form
Route::get('/login', [UserController::class, 'login'])->middleware('guest');
//log in User
Route::post('/users/authenticate', [UserController::class, 'authenticate']);

Route::get('/inscripcion', function(){    
    $userEnrolled = Inscription::where('email', '=', "santiago.avilez@est.fi.uncoma.edu.ar")->get("id");
    dd(count($userEnrolled));
})->name('inscription');

require __DIR__.'/auth.php';

<?php

use App\Http\Controllers\InscriptionController;
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
})->name('index');

Route::get('/send-emails', [EmailController::class, 'sendEmail'])->name('send-emails');



Route::group(['middleware' => 'auth'], function () {
    Route::get('/pre-inscripciones', [InscriptionController::class, 'index'])->name('pre-inscripciones');
    Route::get('/inscripciones', [InscriptionController::class, 'indexInscriptions'])->name('inscripciones');
    Route::get('/pre-inscripciones-rechazadas', [InscriptionController::class, 'indexDeniedInscriptions'])->name('pre-inscripciones-rechazadas');
    Route::get('/inscription/{id}', [InscriptionController::class, 'update']);
    Route::get('/inscriptionDelete/{id}', [InscriptionController::class, 'edit']);
    Route::get('/inscripciones/export', [InscriptionController::class, 'exportAllInscriptions'])->name('inscriptions.export');
});

//Log User Out
Route::get('/logout', [UserController::class, 'logout'])->middleware('auth')->name('logout');
//show login form
Route::get('/login', [UserController::class, 'login'])->middleware('guest');
//log in User
Route::post('/users/authenticate', [UserController::class, 'authenticate']);

Route::get('/inscripcion', function(){    
    $userEnrolled = Inscription::where('email', '=', "santiago.avilez@est.fi.uncoma.edu.ar")->get("id");
    dd(count($userEnrolled));
})->name('inscription');

require __DIR__.'/auth.php';

?>
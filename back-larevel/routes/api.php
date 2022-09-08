<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InscriptionController;
use App\Http\Controllers\RaceCategorieController;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/categories', [RaceCategorieController::class, 'index']);

Route::controller(InscriptionController::class)->group(function () {
    Route::get('/inscriptions', 'index');
    Route::post('/inscription', 'store');
});

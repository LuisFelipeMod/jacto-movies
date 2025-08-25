<?php

use App\Http\Controllers\FilmeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::middleware('auth:api')->group(function () {
    Route::apiResource('filmes', FilmeController::class);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('me', [AuthController::class, 'me']);
});

Route::apiResource('filmes', FilmeController::class);

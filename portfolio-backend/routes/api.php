<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {

    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('me', 'me');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::post('check', 'checkToken');
});

Route::controller(ProjectController::class)->group(function () {

    Route::get('projects', 'index');
    Route::post('project', 'store');
    Route::get('project/{id}', 'show');
    Route::post('project/{id}', 'update');
    Route::delete('project/{id}', 'destroy');
});

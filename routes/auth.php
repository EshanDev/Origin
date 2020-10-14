<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\ConditionController;
use Illuminate\Support\Facades\Route;

Route::name('auth.')->group(function(){

    // Condition Page.
    Route::get('', [ConditionController::class, 'index'])->name('home');

    // Register Route;
    Route::prefix('register')->group(function(){
       Route::get('', [RegisterController::class, 'newStudent'])->name('register');
    });

    // Login Route.
    Route::get('login', [LoginController::class, 'LogInForm'])->name('login');
});

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\ConditionController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

Route::name('auth.')->group(function(){

    // Condition Page.
    Route::get('', [ConditionController::class, 'index'])->name('home');

    // Register Route;
    Route::prefix('register')->group(function(){
       Route::get('', [RegisterController::class, 'newStudent'])->name('register');
    });

    // Login Route.
    Route::get('login', [LoginController::class, 'LogInForm'])->name('login');

    // Send the registration code
    Route::post('getCode', [ConditionController::class, 'SendCode'])->name('getCode')->middleware('auth');

    
    // Route::fallback(function(){
    //     return redirect()->route('auth.home');
    // });
});

// verify registeration code
Route::prefix('verify')->group(function(){
    Route::name('auth.')->group(function(){
        Route::get('code', [AuthController::class, 'verify_code'])->name('verify.code');
        Route::post('', [AuthController::class, 'verify']);
        
    });
   
});

Route::fallback(function(){
    return view('errors.404');
});
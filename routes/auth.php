<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\ConditionController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\VerifyController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Hash;

Route::name('auth.')->group(function(){

    // Condition Page.
    Route::get('', [ConditionController::class, 'index'])->name('home');

    // Register Route;
    Route::prefix('register')->group(function(){
       Route::get('', [RegisterController::class, 'newStudent'])->name('register');
       Route::post('', [RegisterController::class, 'register'])->name('new.student');
       Route::post('/test', [RegisterController::class, 'test'])->name('test');
    });

    // Login Route.
    Route::get('login', [LoginController::class, 'LogInForm'])->name('login');

    // Send the registration code
    Route::post('getCode', [ConditionController::class, 'SendCode'])->name('getCode');

});

// verify registeration code
Route::prefix('verify')->group(function(){
        Route::get('', [AuthController::class, 'verifyCodeForm'])->name('verify.code');
        Route::post('', [VerifyController::class, 'verify_registration_code']);
        Route::post('is_valid', [VerifyController::class, 'is_valid']);
        Route::post('is_invalid', [VerifyController::class, 'is_invalid']);
   
});

Route::fallback(function(){
    return view('errors.404');
});


Route::get('/password', function(){
    $pw = 1234;
    $hashed = '$2a$04$2ihr3Bjo/N5QIU7xKaw86uNl3cBbnMi/40lUjuytOwlcZJqCU5OdC';
    if(Hash::check($pw, $hashed)){
        echo "true";
    } else{
        echo "false";
    }

});
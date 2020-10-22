<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\VerifyController;

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
    return "welcome";
});


Route::get('home', function(){
    $user = Auth::user();
    return view('home', $user);
})->name('home');


Route::post('logout', function(){
    Auth::logout();
    return redirect()->route('auth.login')->with(['success'=> 'ออกจากระบบเรียบร้อย']);
})->name('logout');

Route::post('username', [VerifyController::class, 'checkUserName'])->name('check.username');
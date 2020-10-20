<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function verify_code()
    {
        return view('auth', ['page' => 'verify_code']);
    }



    public function verify(Request $request)
    {
        dd($request->all());
    }
}

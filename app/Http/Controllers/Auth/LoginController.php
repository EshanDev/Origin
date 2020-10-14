<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Show Student login page
     *
     * @return \Illuminate\View\View
     */
    public function LogInForm()
    {
        return view('auth', ['page'=>'login']);
    }

}

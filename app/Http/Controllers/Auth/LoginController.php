<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{

    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    /**
     * Show Student login page
     *
     * @return \Illuminate\View\View
     */
    public function LogInForm()
    {
        return view('auth', ['page'=>'login']);
    }


    protected function credentials(Request $request)
    {
        if(is_numeric($request->get('email'))){
            return ['student_code' => $request->get('email'), 'password'=>$request->get('password')];
        }
        return $request->only($this->username(), 'password');
    }

}

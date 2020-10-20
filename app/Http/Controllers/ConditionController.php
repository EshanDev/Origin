<?php

namespace App\Http\Controllers;

use App\Models\CodeGenerated;
use Illuminate\Http\Request;

class ConditionController extends Controller
{
    /**
     * Show Conditin view informatin page
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('auth', ['page' => 'home']);
    }


    public function SendCode(Request $request)
    {
        $getCode = GenSerials();
        $request->validate([
            'student_code' => 'required|digits:10|string|unique:code_generateds',
            'student_email' => 'required|email|unique:code_generateds',
            'serials' => 'required',
        ]);


        CodeGenerated::create([
            'student_code' => $request->student_code,
            'student_email' => $request->student_email,
            'serials' => $getCode,
        ]);
    }
}

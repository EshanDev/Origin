<?php

namespace App\Http\Controllers;

use App\Models\CodeGenerated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

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
        $data = array(
            'student_code' => $request->student_code,
            'student_email' => $request->student_email,
            'registration_code' => GenSerials(),
        );

        $rules = [
            'student_code' => 'required|digits:10|string|unique:code_generateds',
            'student_email' => 'required|string|email|unique:code_generateds',
        ];

        $messages = [
            'student_code.required' => 'กรุณาระบุรหัสนักศึกษา',
            'student_code.unique' => 'รหัสนักศึกษานี้ได้ลงทะเบียนไว้แล้ว',
            'student_email.required' => 'กรุณาระบุที่อยู่อีเมล์',
            'student_email.unique' => 'อีเมล์นี้ได้ลงทะเบียนไว้แล้ว',

        ];
        $validateData = Validator::make($request->all(), $rules, $messages);

        if($validateData->fails()){
            return back()->withInput()->withErrors($validateData);
        };
        try{
             CodeGenerated::create([
                'student_code' => $data['student_code'],
                'student_email' => $data['student_email'],
                'registration_code' => GenSerials(),
            ]);
        
            return redirect()->route('verify.code')->with(['success' => 'รหัสลงทะเบียนได้ส่งไปยัง ' .$data['student_email']. ' แล้ว']);
            

        } catch (\Exception $exception){
            return back()->withInput()->withErrors($exception->getMessage());
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Mail\RegistrationCode;
use App\Models\CodeGenerate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ConditionController extends Controller
{

   public function __construct()
   {
       $this->middleware('ismember');
   }


    /**
     * Show Conditin view informatin page
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
            'student_code' => 'required|digits:10|string|unique:code_generates',
            'student_email' => 'required|string|email|unique:code_generates',
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
             $code =CodeGenerate::create([
                'student_code' => $data['student_code'],
                'student_email' => $data['student_email'],
                'registration_code' => $data['registration_code'],
            ]);


            if($code){

                Mail::to($code->student_email)->send(new RegistrationCode($code));
                return redirect()->route('verify.code')->with(['success' => 'รหัสลงทะเบียนได้ส่งไปยัง ' .$code->student_email. ' แล้ว']);
            } else{
                return back()->with('error', 'ไม่สามารถบันทึกข้อมูลได้ โปรดลองใหม่อีกครั้ง');
            }






        } catch (\Exception $exception){
            return back()->withInput()->withErrors($exception->getMessage());
        }
    }
}

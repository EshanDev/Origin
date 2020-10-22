<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\CodeGenerate;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class VerifyController extends Controller
{
    public function verify_registration_code(Request $request)
    {
        $Exists_reg_code = CodeGenerate::all()->where('registration_code', $request->input('registration_code'))->first();

        if(!$Exists_reg_code){
            return back()->withInput()->withErrors('รหัสลงทะเบียนไม่ถูกต้อง');
        } else {
            $codes = DB::table('code_generates')
                ->select('student_code', 'student_email', 'registration_code')
                ->where('registration_code', $request->input('registration_code'))
                ->get();

            foreach ($codes as $code){
                $data = array(
                    'student_code' => $code->student_code,
                    'student_email' => $code->student_email,
                    'registration_code' => $code->registration_code,
                );
                return redirect()->route('auth.register', $data);

            }

        }
    }

    public function is_invalid(Request $request)
    {
        if( !empty($request->except('_token'))){


                    $rule = [
                        'student_code' => 'unique:code_generates',
                        'student_email' => 'unique:code_generates',
                    ];
                    $validateData = Validator::make($request->all(), $rule);
                    if(!$validateData->fails()){
                        die('true');
                    } else {
                        die('false');
                    }





        }
    }

    public function is_valid(Request $request)
    {
        if (!empty($request->except('_token'))){
            $rules = [
                'registration_code' => 'unique:code_generates',
                'email' => 'unique:users',
            ];
            $valid = Validator::make($request->all(), $rules);
            if($valid->fails()){
                die('true');
            } else {
                die('false');
            }
        }
    }

    public function checkUserName(Request $request){
        dd($request->all());
    }

    
}

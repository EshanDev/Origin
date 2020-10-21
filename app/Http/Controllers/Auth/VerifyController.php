<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\CodeGenerated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class VerifyController extends Controller
{
    public function verify_registration_code(Request $request)
    {
        $Exists_reg_code = CodeGenerated::all()->where('registration_code', $request->input('registration_code'))->first();

        if(!$Exists_reg_code){
            return back()->withInput()->withErrors('รหัสลงทะเบียนไม่ถูกต้อง');
        } else {
            $codes = DB::table('code_generateds')
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
                        'student_code' => 'unique:code_generateds',
                        'student_email' => 'unique:code_generateds',
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
                'registration_code' => 'unique:code_generateds',
            ];
            $valid = Validator::make($request->all(), $rules);
            if($valid->fails()){
                die('true');
            } else {
                die('false');
            }
        }
    }
}

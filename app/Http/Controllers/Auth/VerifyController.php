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
            echo 'false';
        } else {
            echo 'true';
        }
    }

    public function is_valid(Request $request)
    {
        if( !empty($request->except('_token'))){

                $rule = [
                    'student_code' => 'unique:code_generateds',
                    'student_email' => 'uniquer:code_generateds',
                ];
                $validateData = Validator::make($request->all(), $rule);
                if(!$validateData->fails()){
                    die('true');
                } else {
                    die('false');
                }


        }
    }

    public function is_invalid(Request $request)
    {
        $email = CodeGenerated::all()->where('student_email', $request->input('student_email'))->first();
        $code = CodeGenerated::all()->where('student_code', $request->input('student_code'))->first();
        $reg = CodeGenerated::all()->where('registration_code', $request->input('registration_code'))->first();
    }
}

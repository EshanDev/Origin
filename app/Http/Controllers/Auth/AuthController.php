<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function verifyCodeForm()
    {
        return view('auth', ['page' => 'verify_code']);
    }



    public function verify(Request $request)
    {
	    $data = array(
            'registration_code' => $request->registration_code,
        );

        $query = DB::table('code_generates')->where('serials', $data['registration_code'])->first();
        if($query){
            return true;
        } else{
            return back()->withInput()->with(['fails' => 'รหัสลงทะเบียนไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง']);
        }

    }

}

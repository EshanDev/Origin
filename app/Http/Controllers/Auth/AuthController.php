<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function verify_code()
    {
        return view('auth', ['page' => 'verify_code']);
    }



    public function verify(Request $request)
    {
        $rules = [
            'registration_code' => 'required|string',
        ];
        $messages = [
          'required' => 'กรุณากรอกรหัสลงทะเบียน',
        ];


        $validator = Validator::make($request->all(), $rules, $messages);

        if($validator->fails()){
            return back()
                ->withErrors($validator)
                ->withInput();
        };

        return response()->json($request->all());

    }
}

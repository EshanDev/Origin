<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\ForgetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ForgotPasswordController extends Controller
{

    public function requestPassword()
    {
        return view('auth', ['page' => 'request_password']);
    }

    public function resetPassword(Request $request)
    {


        $rules = [
            'email' => 'exists:users',
        ];

        $validateEmail = Validator::make($request->all(), $rules);
        if($validateEmail->fails()){
            return back()->withInput()->withErrors('error', 'ไม่พบข้อมูลอีเมล์');
        } else{

            $token = Str::random(60);

            $count = DB::table('recovery_passwords')->where('email', $request->input('email'))->count();

            if($count == 1) {
                DB::table('recovery_passwords')->update([
                   'email' => $request->input('email'),
                   'token' => $token,
                ]);
            } else {
                DB::table('recovery_passwords')->insert([
                   'email' => $request->input('email'),
                   'token' => $token,
                ]);
            }
        }
        $users = DB::table('students')
            ->join('recovery_passwords', 'students.student_email', '=', 'recovery_passwords.email')
            ->select('students.student_name', 'students.student_code', 'recovery_passwords.email', 'recovery_passwords.token')
            ->first();

        $data = array(
            'name' => $users->student_name,
            'code' => $users->student_code,
            'token' => $users->token,
            'email' => $users->email,
        );

        //Mail::to($request->input('email'))->send(new ForgetPassword($users));

        //return response()->json($data);

        return back()->with('success', 'คำร้องได้ส่งไปยังกล่องข้อความของท่านแล้ว');
    }

}





//$email = $request->except('_token');
//try {
//    $token = Str::random(60);
//
//    $process = DB::table('recovery_passwords')
//        ->updateOrInsert([
//            ['email' => $email, 'token' => $token, 'updated_at' => Carbon::now()],
//            ['email' => $email, 'token' => $token, 'updated_at' => Carbon::now()]
//        ]);
//
//    if($process){
//        $data = DB::table('students')
//            ->join('password_resets', 'students.student_email', '=', 'password_resets.email')
//            ->select('students.student_email', 'password_resets.email', 'password_resets.token')
//            ->get();
//        return response()->json($data);
//    }
//
//} catch (\Exception $exception){
//    return back()->withInput()->withErrors($exception->getMessage());
//}


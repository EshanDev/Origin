<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\NewStudents;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    use NewStudents, RegistersUsers;


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('web');
    }



    /**
     * Get a validator for an incoming registration request
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string','max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
        ]);
    }


    /**
     * Create a new user instance after a valid reqistration.
     *
     * @param array $data
     * @return \App\User
     */
    protected function create(array $data)
    {
       return User::create([
          'name' => $data['name'],
          'email' => $data['email'],
          'password' => Hash::make($data['password']),
       ]);
    }



    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function registered(Request $request, $user)
    {
        try{

            // Insert Registration Code into table
        $user->userActivationCode()->create([
            'code' => Hash::make($request->registration_code),
        ]);

        // Insert Student information into table
        $user->studentInfo()->create([
            'student_name' => $request->student_name,
            'student_code' => $request->student_code,
            'student_email' => $request->student_email,
            'student_branch' => $request->student_branch,
            'student_faculty' => $request->student_faculty,
        ]);

        // Delete Old Registration Code from table
        $user->coded()->delete();


        // Logout the user
        $this->guard()->logout();

        return redirect()->route('auth.login')->with(['success' => 'คุณได้ลงทะเบียนเรียบร้อยแล้ว']);
        } catch (\Exception $exception) {
            return back()->withInput()->withErrors($exception->getMessage());
        }
    }
}

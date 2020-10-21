<?php
namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

trait NewStudents
{
    public function newStudent(Request $request)
    {
        if(count($request->all()) > 0) {
            if (isset($_GET['student_code'])){
                $query = DB::table('code_generateds')
                ->select('student_code', 'student_email', 'registration_code')
                ->where('student_code', $_GET['student_code'])->get();
                foreach ($query as $key => $item){
                    $data = array(
                        'student_code' => $item->student_code,
                        'student_email' => $item->student_email,
                        'registratoin_code' => $item->registration_code,
                    );
                    return view('auth', ['page'=> 'register'],)->with('register', $data);
                }
            } else{
                return redirect()->route('verify.code');
            }
        } else {
            return redirect()->route('verify.code');
        }
    }

}

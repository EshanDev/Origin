<?php
namespace App\Traits;

use App\Models\CodeGenerate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

trait NewStudents
{
    public function newStudent(Request $request)
    {
      if(isset($_GET['student_code']) && isset($_GET['student_email']) && isset($_GET['registration_code'])){
        $data = $request->all();
        
        $student = [
          'code' => $data['student_code'],
          'email' => $data['student_email'],
          'serials' => $data['registration_code'],
          'username' => FakeUserName(),
        ];
        return view('auth', ['page'=>'register'])->with('student', $student);
      }
      return redirect()->route('verify.code');
    }



    
    public function test(Request $request)
    {
      $delete = DB::table('code_generates')->where('registration_code', $request->registration_code)->delete();

      if($delete){
        return "ok";
      } else{
        return 'not ok';
      }
    }

}

<?php
namespace App\Traits;

trait NewStudents
{
    public function newStudent()
    {
        return view('auth', ['page'=>'register']);
    }

}

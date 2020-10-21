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
}

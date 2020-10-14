<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ConditionController extends Controller
{
    /**
     * Show Conditin view informatin page
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('auth', ['page'=>'home']);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CodeGenerated extends Model
{
    use HasFactory;

    protected $fillable = ['student_code', 'student_email', 'serials'];
}

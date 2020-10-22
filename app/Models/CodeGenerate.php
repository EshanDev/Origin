<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CodeGenerate extends Model
{
    use HasFactory;

    protected $fillable = ['student_code', 'student_email', 'registration_code'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

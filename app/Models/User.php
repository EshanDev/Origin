<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'student_code',
        'password',
        'acitve',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];




    public function coded()
    {
        return $this->hasOne(CodeGenerate::class, 'id', 'id');
    }

    public function userActivationCode(){
        return $this->hasOne(RegistrationCode::class, 'reg_id', 'id');
    }

    public function userIsActivated()
    {
        if($this->active){
            return true;
        }
        return false;
    }

    public function studentInfo()
    {
        return $this->hasOne(Student::class, 'student_id', 'id');
    }
}

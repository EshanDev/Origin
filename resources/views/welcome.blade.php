@extends('layouts.auth')
@section('main-app')
    <div class="container">
        <div class="text-center">
            <h3>ทดสอบภาษาไทย</h3>
        </div>
    </div>
    {{ GenSerials() }}
    <hr>
    {{ FakeUserName() }}
    <hr>
    {{ change_date_format(date('Y-m-d'), 'm/d/Y') }}
    <hr>
    {{ formatDateThai(date('Y-m-d H:i:s')) }}
    @endsection

@extends('layouts.auth')

@section('stylesheet')
    <link rel="stylesheet" href="{{ mix('css/auth.css') }}">
    @endsection

@section('navbar')
    @include('auth.partials.navbar')
    @endsection
@section('main-app')


    @switch($page)
        @case('home')
        @include('auth.partials.content')
        @break

        @case('register')
        @include('auth.partials.register')
        @break

        @case('login')
        @include('auth.partials.login')
        @break

    @default
        @include('auth.partials.content')
    @endswitch



    @endsection



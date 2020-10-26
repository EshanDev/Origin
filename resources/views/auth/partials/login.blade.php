<div class="auth login-container contrainer-fluid">
    <div class="content">

        <div class="login-form">
            <div class="content-header">
                <div class="login-icons">
                    {{-- <i class="fal fa-user-circle"></i> --}}
                    <i class="fas fa-user-circle"></i>
                </div>
                <div class="group-text">
                    <div>ลงชื่อเข้าใช้งาน</div>
                </div>
            </div>
            @if(session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
            @endif
            @if(session('fails'))
                <div class="alert alert-danger">
                    {{session('fails')}}
                </div>
            @endif
            <form action="{{ route('auth.user.login') }}" class="form" autocomplete="off" role="form" id="login_form"
                method="POST">
                @csrf


                <div class="grid-container">
                    <div class="form-group">
                        <label for="email_or_student_code">รหัสนักศึกษา หรือ อีเมล์</label>
                        <input type="text" name="email" id="email" class="form-control @error('email') is-invalid @enderror" placeholder="รหัสนักศึกษา หรือ อีเมล์" value="{{ old('email') }}">
                        @error('email')
                        <span class="invalid-feedback" role="alert">
                                        <div>{{ $message }}</div>
                                    </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="password">รหัสผ่าน</label>
                        <input type="password" name="password" id="password"
                            class="form-control @error('password') is-invalid @enderror" placeholder=" รหัสผ่าน"
                            value="{{ old('password') }}">
                        @error('password')
                        <span class="invalid-feedback" role="alert">
                                        <div>{{ $message }}</div>
                                    </span>
                        @enderror
                    </div>
                    <div class="login-btn">
                        <input type="submit" class="btn btn-primary" value="ลงชื่อใช้งาน">
                        <a href="{{ url('auth/password_request') }}">Forgot Your Password?</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

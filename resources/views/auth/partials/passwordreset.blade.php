<div class="auth forgot-password-container container-fulid">
    <div class="content">
        <div class="content-header">
            <div class="group-text">
                <div>กู้คืนรหัสผ่าน</div>
                <div>Recovery Password</div>
            </div>
        </div>

        @if(session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>


        @endif



        <div class="forget-form">
            @include ('includes.message')
            <form action="{{ url('auth/send_request_reset_password') }}" class="form" method="POST" id="reset_form">
                @csrf
                <div class="form-group">
                    <label for="email">ที่อยู่อีเมล์</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="กรอกที่อยู่อีเมล์" onblur="this.placeholder='กรอกที่อยู่อีเมล์'" onfocus="this.placeholder=''">
                </div>
                <div class="submit-btn">
                    <input type="submit" class="btn btn-primary" value="ส่งข้อมูล">
                </div>
            </form>
        </div>
    </div>
</div>

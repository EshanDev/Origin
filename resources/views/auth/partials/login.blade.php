<div class="auth register contrainer-fluid">
    <div class="content">
        

        <div class="login-content">
            <form action="#" class="form" autocomplete="off" role="form" method="POST">
                @csrf
                
                <div class="content-header">
                    <div class="login-icons">
                        {{-- <i class="fal fa-user-circle"></i> --}}
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <div class="group-text">
                        <div>ลงชื่อเข้าใช้งาน</div>
                    </div>
                </div>
                <div class="grid-container">
                    <div class="form-group">
                        <label for="email_or_student_code">รหัสนักศึกษา หรือ อีเมล์</label>
                        <input type="text" name="email" id="email" class="form-control" placeholder="รหัสนักศึกษา หรือ อีเมล์">
                    </div>
                    <div class="form-group">
                        <label for="password">รหัสผ่าน</label>
                        <input type="password" name="password" id="password" class="form-control" placeholder="รหัสผ่าน">
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="ลงชื่อใช้งาน">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
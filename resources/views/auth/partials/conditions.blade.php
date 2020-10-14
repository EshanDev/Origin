<div class="auth container-fluid">
    <div class="conditions-form">
        <div class="form-header">
            <div class="text-center">กรอกข้อมูลเพื่อรับรหัสลงทะเบียน</div>
        </div>
        <form action="{{ url('auth/send_coded') }}" class="form" id="conditions_form" method="POST" >
            @csrf
            <div class="group-form">
                <div class="form-group">
                    <label for="student_code">ระบุรหัสนักศึกษา</label>
                    <input type="text" class="form-control" name="student_code" id="student_code" value="{{old('student_code')}}">
                </div>
                <div class="form-group">
                    <label for="student_email">ระบุที่อยู่อีเมล์</label>
                    <input type="email" class="form-control" name="student_email" id="student_email" value="{{old('student_email')}}" >
                    <span id="error_email"></span>
                </div>
            </div>
            <div class="form-footer">
                <div class="form-group">
                    <input type="submit" class="btn btn-secondary" value="ส่งรหัสยืนยันสิทธิ์">
                </div>
            </div>
        </form>

    </div>
</div>


<div class="auth condition-container container-fluid">
    <div class="content">
        <div class="content-header">
            <div class="group-text">
                <div>ข้อตกลง/เงื่อนไข</div>
                <div>และผู้มีสิทธิ์ลงทะเบียน</div>
            </div>
        </div>


        <!-- Conditions Start -->
        <div class="conditions">
            <div class="text-header">
                <div>ผู้มีสิทธิ์ลงทะเบียน</div>
            </div>

            <div class="list">
                <ul>
                    <li>ต้องเป็นนักศึกษามหาวิทยาลัยรามคำแหงที่กำลังศึกษา หรือสอบผ่านกระบวนวิชา ECT1301
                        คอมพิวเตอร์เพื่อการเรียนการสอน
                        และมีคอมพิวเตอร์หรืออุปกรณ์ที่สามารถเข้าใช้งานเว็บฝึกอบรมผ่านระบบอินเทอร์เน็ตได้ สงวนสิทธิ์เฉพาะ
                        นักศึกษาระดับปริญญาตรีเท่านั้น
                    </li>
                </ul>
            </div>
            <div class="text-header">
                <div>ข้อตกลง / เงื่อนไข</div>
            </div>

            <div class="list">
                <ul>
                    <li>
                        การลงทะเบียนจะถูกจำกัดไว้เพียง 30 สิทธิ์ สำหรับผู้ที่ยืนยันสิทธิ์เรียบร้อยเท่านั้น
                    </li>
                    <li>
                        นักศึกษาที่ได้รับสิทธิ์ใช้งานเว็บฝึกอบรม จะได้รับสิทธิ์ การใช้งานในนามของผู้เข้าอบรม
                        และต้องให้ความร่วมมือในการจัดการศึกษาวิจัย
                        โดยดำเนินการใช้งานเว็บฝึกอบรมเป็นไปตามที่ระบบจัดเตรียมไว้ให้
                    </li>
                    <li>
                        นักศึกษาที่ได้รับสิทธิ์ใช้งานเว็บฝึกอบรมจะต้องเข้าร่วมกระบวนการศึกษาวิจัยโดยดำเนินการฝึกอบรมจนครบ
                        18 ชั่วโมง หรือ จบคอร์สสำหรับฝึกอบรมที่ระบบจัดเตรียมไว้ให้
                    </li>
                    <li>
                        เมื่อนักศึกษาเข้าร่วมการศึกษาวิจัยจนครบ 18 ชั่วโมง หรือ จบคอร์สฝึกอบรม
                        ระบบจะปรับสิทธิ์ผู้ใช้งานเป็น ผู้ใช้งานทั่วไปและยังใช้งานเว็บฝึกอบรมได้ต่อไป จนกว่า
                        เว็บฝึกอบรมจะมีการเปลี่ยนแปลง
                    </li>
                </ul>
            </div>
        </div>
        <!-- Conditions Stop -->
        <div class="condition-form">
            <div class="form-header">
                <p>กรอกข้อมูลเพื่อรับรหัสลงทะเบียน</p>
            </div>
            <form action="{{ url('auth/send_coded') }}" class="form" id="condition_form" method="POST"
                autocomplete="off">
                @csrf
                <div class="grid-container">
                    <div class="form-group">
                        <label for="student_code">ระบุรหัสนักศึกษา</label>
                        <input type="text" class="form-control" name="student_code" id="student_code"
                            value="{{old('student_code')}}" placeholder="xxxxxxxxxx" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'xxxxxxxxxx'">
                    </div>
                    <div class="form-group">
                        <label for="student_email">ระบุที่อยู่อีเมล์</label>
                        <input type="email" class="form-control" name="student_email" id="student_email"
                            value="{{old('student_email')}}" placeholder="email@email.com"
                            onfocus="this.placeholder = ''" onblur="this.placeholder = 'email@email.com'">
                    </div>
                </div>
                <div class="condition-btn">
                        <input type="submit" class="btn btn-primary" value="รับรหัสลงทะเบียน">
                </div>
            </form>

        </div>
    </div>

</div>

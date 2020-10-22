<div class="auth registration-container container-fluid">
    <div class="content">
        <div class="content-header">
            <div class="group-text">
                <div>ฟอร์มลงทะเบียน</div>
                <div>ข้อมูลนักศึกษา/รหัสผู้ใช้งาน</div>
            </div>
        </div>


        <div class="registration">
            <div class="text-header">
                <div>คำชี้แจง</div>
            </div>
            <div class="list">
                การกรอกข้อมูลลงทะเบียน นักศึกษาจะต้องกรอกข้อมูลที่เป็นจริงให้ครบทุกช่องที่กำหนดไว้
                เพื่อใช้เป็นข้อมูลในการตรวจสอบสิทธิ์การใช้งาน และเพื่อให้เป็นไปตามวัตถุประสงค์ของการศึกษาวิจัย
            </div>
        </div>


        <div class="registration-form">

            <form action="{{ route('auth.new.student') }}" method="post" class="form" autocomplete="off"
                  id="registration_form">
            @csrf
            <!-- Form Group One -->


                    <fieldset class="border rounded">
                        <legend class="w-auto ">ส่วนที่ 1 ข้อมูลรหัสลงทะเบียน</legend>
                        <div class="grid-container">
                            <div class="form-group code">
                                <label for="registration_code">รหัสลงทะเบียน</label>
                                <input type="text" class="form-control serials" name="registration_code"
                                       id="registration_code" placeholder="ABCDE-ABCDE-ABCDE-ABCDE"
                                       value="{{ $student['serials'] }}"
                                       onfocus="this.placeholder = ''"
                                       onblur="this.placeholder = 'ABCDE-ABCDE-ABCDE-ABCDE'">

                            </div>
                            <div class="form-group">
                                <label for="student_code">รหัสนักศึกษา</label>
                                <input type="text" name="student_code" class="form-control"
                                       value="{{ $student['code'] }}" placeholder="ระบุรหัสนักศึกษา"
                                       onfocus="this.placeholder = ''"
                                       onblur="this.placeholder = 'ระบุรหัสนักศึกษา'">

                            </div>

                            <div class="form-group">
                                <label for="student_email">ที่อยู่อีเมล์</label>
                                <input type="email" name="student_email" class="form-control"
                                       value="{{ $student['email'] }}"
                                       placeholder="ระบุที่อยู่อีเมล์"
                                       onfocus="this.placeholder = ''"
                                       onblur="this.placeholder = 'ระบุที่อยู่อีเมล์'">

                            </div>
                        </div>
                    </fieldset>


                <!-- End Form Group One -->


                <!-- Form Group Two -->


                    <fieldset class="border rounded ">
                        <legend class="w-auto ">ส่วนที่ 2 ข้อมูลนักศึกษา</legend>
                        <div class="grid-container">
                            <div class="form-group">
                                <label for="student_name">ชื่อ/สกุล</label>
                                <input type="text" name="student_name" class="form-control"
                                       value="{{ old('student_name') }}"
                                       placeholder="ชื่อ - นามสกุล"
                                       onblur="this.placeholder = 'ชื่อ - นามสกุล'"
                                       onfocus="this.placeholder =''">
                            </div>
                            <div class="form-group">
                                <label for="student_branch">สาขาวิชาเอก</label>
                                <input type="text" name="student_branch" value="{{ old('student_branch') }}"
                                       class="form-control"
                                       placeholder="สาขาวิชาที่กำลังศึกษา"
                                       onfocus="this.placeholder =''"
                                       onblur="this.placeholder= 'สาขาวิชาที่กำลังศึกษา'">
                            </div>

                            <div class="form-group">
                                <label for="student_faculty">คณะ</label>
                                <input type="text" class="form-control" name="student_faculty"
                                       value="{{ old('student_faculty') }}" placeholder="คณะที่กำลังศึกษา"
                                       onblur="this.placeholder='คณะที่กำลังศึกษา'" onfocus="this.placeholder =''">
                            </div>

                        </div>
                    </fieldset>


                <!-- End Form Group Two -->


                <!-- Form Group Three -->


                    <fieldset class="border rounded ">
                        <legend class="w-auto ">ส่วนที่ 3 สร้างรหัสผู้ใช้งาน</legend>
                        <div class="grid-container">
                            <div class="form-group">
                                <label for="name">รหัสผู้ใช้งาน <span class="text-danger">***เปลี่ยนได้</span></label>
                                <input type="text" name="name" class="form-control" value="{{ $student['username'] }}"
                                       placeholder="กำหนดรหัสผู้ใช้งาน" onfocus="this.placeholder=''"
                                       onblur="this.placeholder='กำหนดรหัสผู้ใช้งาน'">
                                <input type="hidden" name="email"  id="email" value="{{ $student['email'] }}">
                            </div>
                            <div class="form-group">
                                <label for="password">รหัสผ่าน</label>
                                <input type="password" name="password" id="password" placeholder="กำหนดรหัสผ่านใหม่"
                                       onblur="this.placeholder='กำหนดรหัสผ่านใหม่'" onfocus="this.placeholder=''"
                                       class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password-confirm">ยืนยันรหัสผ่าน</label>
                                <input type="password" name="password_confirmation" placeholder="ยืนยันรหัสผ่านอีกครั้ง"
                                       onfocus="this.placeholder=''" onblur="this.placeholder='ยืนยันรหัสผ่านอีกครั้ง'"
                                       class="form-control">
                            </div>
                        </div>

                    </fieldset>


                <!-- End Form Group Three -->

                <div class="register-btn">
                    <input type="submit" class="btn btn-primary" value="ส่งข้อมูล">
                </div>

            </form>

            @if($errors->any())
                <ul style="margin: 0;">
                    @foreach($errors->all() as $error)
                        <li>
                            {{ $error }}
                        </li>
                    @endforeach
                </ul>
                @endif
        </div>


    </div>
</div>

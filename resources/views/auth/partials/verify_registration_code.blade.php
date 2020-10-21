<div class="auth verify-container container-fluid">

    <div class="content">
        <div class="content-header">
            <div class="group-text">
                <div>ระบบตรวจสอบรหัสลงทะเบียน</div>
                <div>(Registration Code)</div>
            </div>
        </div>

        @if(session('fails'))
        <div class="alert alert-danger mt-5 text-center">
            {{session('fails')}}
        </div>
        @endif
        @if(session('success'))
        <div class="alert alert-success mt-5 text-center">
            {{session('success')}}
        </div>
        @endif


        <div class="verify-form">
            <form action="{{ url('auth/verify') }}" class="form" method="POST" id="verify_form" autocomplete="off">
                @csrf
                <fieldset class="border rounded">
                    <legend class="w-auto">ยืนยันรหัสลงทะเบียน</legend>
                    <div class="form-group">

                        <label for="registration_code">กรอกรหัสลงทะเบียน</label>
                        <input type="text" class="form-control serials" name="registration_code" id="registration_code"
                            placeholder="ABCDE-ABCDE-ABCDE-ABCDE" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'ABCDE-ABCDE-ABCDE-ABCDE'">
                    </div>
                    <div class="verify-btn">
                        <input type="submit" class="btn btn-primary" value="ส่งรหัสลงทะเบียน">
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</div>


@section('script')
<script>
    $(document).ready(function(){


            $('.serials').mask('AAAAA-BBBBB-CCCCC-DDDDD', {'translation': {
                    A: {pattern: /[A-Za-z0-9]/},
                    B: {pattern: /[A-Za-z0-9]/},
                    C: {pattern: /[A-Za-z0-9]/},
                    D: {pattern: /[A-Za-z0-9]/},

                }
            })

        });
</script>
@endsection
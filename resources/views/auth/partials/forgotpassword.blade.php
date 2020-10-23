<div class="auth forget-password-container container-fulid">
    <div class="content">
        <div class="content-header">
            <div class="group-text">
                <div>ระบบกู้คืนรหัสผ่าน</div>
                <div>(Foget the password)</div>
            </div>
        </div>

        <div class="forgot-content">
            <form action="{{ url('forget-password') }}" method="POST" autocomplete="off" class="form">
                @csrf
                
            </form>
        </div>

    </div>
</div>

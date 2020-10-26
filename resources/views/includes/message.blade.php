<style>
    .alert{
        font-size: 14px;
        line-height: 1.5;
    }
</style>
<script type="text/javascript">
    window.setTimeout(function() {
        $(".alert").slideUp(200)
    }, 10000);
</script>
@if($message = Session::get('success'))
    <div class="alert alert-success alert-block">
        <button type="button" class="close" data-dismiss="alert">x</button>
        <span>{{$message}}</span>
    </div>
    @endif
@if($message = Session::get('error'))
    <div class="alert alert-danger alert-block">
        <button type="button" class="close" data-dismiss="alert">x</button>
        <span>{{$message}}</span>
    </div>
@endif
@if($message = Session::get('warning'))
    <div class="alert alert-warning alert-block">
        <button type="button" class="close" data-dismiss="alert">x</button>
        <span>{{$message}}</span>
    </div>
@endif
@if($message = Session::get('info'))
    <div class="alert alert-info alert-block">
        <button type="button" class="close" data-dismiss="alert">x</button>
        <span>{{$message}}</span>
    </div>
@endif
@if($errors->any())
    <div class="alert alert-danger alert-block">
        <button type="button" class="close" data-dismiss="alert">x</button>
        @foreach($errors->all() as $error)
            <ul>
                <li>{{$error}}</li>
            </ul>
        @endforeach
    </div>
@endif

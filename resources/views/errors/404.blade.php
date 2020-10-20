<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>404 Page not found</title>
    <link rel="stylesheet" href="{{ mix('css/ui.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('vendor/fontawesome/css/all.css') }}">
</head>
<body id="page_not_found">

    <div class="content">
        <div class="icons text-center"><i class="fal fa-exclamation-triangle"></i></div>
        <div class="text-header">404 page not found</div>
        <a class="text-primary" href="javascript:void(0)" onclick="Previous()">Click to Back</a>
        <div class="text-danger">
            <span id="countdown"></span></div>

    </div>

    <script src="{{ mix('js/app.js') }}"></script>
    <script type="text/javascript">
        function Previous() {
            window.history.back()
        }

        $(document).ready(function(){

            setTimeout(function(){
                history.back();
            }, 5000);

        });



        window.onload = function(){
            $(function(){
                let counter = 5;

                setInterval(function(){
                    counter--;
                    if(counter >= 0){
                        let span = document.getElementById('countdown');
                        span.innerHTML ="Web page redirect after "+ counter + ' seconds';
                    }
                    if (counter == 0){
                        clearInterval(counter);
                    }
                }, 1000);
            });
        }

    </script>
</body>
</html>

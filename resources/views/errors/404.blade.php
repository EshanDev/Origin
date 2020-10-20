<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>404 Page not found</title>
    <link rel="stylesheet" href="{{ mix('css/ui.css') }}">
</head>
<body id="page_not_found">

    <div class="content">
        <div class="text-header">404 page not found</div>
        <div class="text-fallback">
            <a href="{{ route('auth.home') }}">GoBack</a>
        </div>
    </div>
    
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
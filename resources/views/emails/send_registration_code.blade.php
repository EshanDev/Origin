<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>รหัสลงทะเบียน - Registration Code</title>
</head>
<style>
    body {
        background-color: #f5f5f5;
    }

    .container {
        width: 100%;
        padding: 0 .05rem;
        margin: 0 auto;
    }

    .container .content {
        margin-top: 30px;
        color: #4d4d4d;
    }

    .img-logo {
        width: 100%;
        margin: 0 auto;
        max-width: 300px;
    }

    .content-header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .text-header {
        font-size: 25px;
        font-weight: bold;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #4d4d4d;
    }

    .mail-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        max-width: 800px;
        min-height: 250px;
        padding: 15px;
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        background-color: #ffffff;
        box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.1);
    }

    .mail-area p {
        margin: 0;
    }

    .text-name {
        font-size: 25px;
    }

    .code {
        line-height: 2;
        font-size: 23px;
    }

    .small-text {
        font-size: 14px;
        color: rgb(42, 11, 177);
    }

    @media screen and (min-width: 480px) {
        .text-name {
            font-size: 35px;
        }
        .code {
            font-size: 30px;
        }
        .small-text {
            font-size: 15px;
        }
    }
</style>

<body>
<div class="container">
    <div class="content">
        <div class="content-header">
            <img src="https://img.pngio.com/school-supplies-school-material-2100791-transprent-png-free-download-brand-plastic-graphic-design-school-supplies-png-2100_791.png" alt="logo" class="img-logo">
            <div class="text-header">Self-training.in.th</div>
        </div>


        <div class="mail-area">
            <p class="text-name">รหัสลงทะเบียน</p>
            <div class="code">{{$code->registration_code}}</div>
            <p class="small-text">โปรดคัดลอกรหัสลงทะเบียนที่ได้รับและนำไปใช้สำหรับลงทะเบียน</p>
        </div>
    </div>
</div>
</body>

</html>

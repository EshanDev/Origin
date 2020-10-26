<?php
// Generate Registration Code for New Student.
if (!function_exists('GenSerials')) {
    function salt($leng = 22)
    {
        return substr(sha1(mt_rand()), 0, $leng);
    }

    function GenSerials()
    {
        $code = '0123456789';
        $hash = md5($code . salt());

        for ($i = 0; $i < 1000; $i++) {
            $hash = md5($hash);
        }
        return implode('-', str_split(substr(strtoupper($hash), 0, 20), 5));
    }
}


// Emulate Username for new student.
if (!function_exists('FakeUserName')) {
    function FakeUserName($length = 5)
    {
        $char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charLength = strlen($char);
        $ranString = '';

        for ($i = 0; $i < $length; $i++) {
            $ranString .= $char[rand(0, $charLength - 1)];
        }
        return "SDL-" . $ranString;
    }
}


// Change Date Format
if (!function_exists('change_date_format'))
{
    function change_date_format($date, $format)
    {
        return \Illuminate\Support\Carbon::createFromFormat('Y-m-d', $date)->format($format);
    }
}


// Format Date Time to Thai.
if (!function_exists('formatDateThai')){
    function formatDateThai($strDate)
    {
        $strYear = date("Y",strtotime($strDate))+543;
        $strMonth= date("n",strtotime($strDate));
        $strDay= date("j",strtotime($strDate));
        $strHour= date("H",strtotime($strDate));
        $strMinute= date("i",strtotime($strDate));
        $strSeconds= date("s",strtotime($strDate));
        $strMonthCut = Array("","ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค.");
        $strMonthThai=$strMonthCut[$strMonth];
        return "$strDay $strMonthThai $strYear $strHour:$strMinute";
    }
}





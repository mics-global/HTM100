<?php
$to = '';
$headers = 'From: form-forwarder@mics.tech';


foreach ($_POST as $key => $value){
    $field = htmlspecialchars($key);
    $answer = htmlspecialchars($value);

    if ($field == 'to'){
        $to = $answer;
    }else{
        $message .= "Field ". $field ." is ". $answer;
    }
}

mail($to, 'MICS Form Forwarder', $message, $headers);

?>
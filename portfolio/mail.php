<?php

$frm_name  = "webkitten.tk";
$recepient = "webkitten@list.ru";
$sitename  = "webkitten.tk";
$subject   = "Новый МЭСССАДЖ с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);

$message = "
E-mail: $email <br>
Имя: $name <br>
Сообщение: $message
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");

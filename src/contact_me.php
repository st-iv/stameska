<?php
// Check for empty fields
    //$recaptcha = $_POST["g-recaptcha-response"];
    
if (empty($_POST['email'])) $err = "Не введен номер телефона.";
else
{

        $name = strip_tags(htmlspecialchars($_POST['name']));
        $email_address = strip_tags(htmlspecialchars($_POST['email']));
        $phone = strip_tags(htmlspecialchars($_POST['phone']));
        $message = strip_tags(htmlspecialchars($_POST['message']));
        $company = strip_tags(htmlspecialchars($_POST['company']));

// Create the email and send the message
        $to = 'zakaz@mkland.ru'; //
        $email_subject = "Сайт mkland.ru Имя:$name";
        $email_body =
            "Новая заявка.\n\n
    " . "Компания: $company\n\n
    Имя: $name\n\n
    Email: $email_address\n\n
    Телефон: $phone\n\n
    Комментарий: $message";
        $headers = "From: bot-sender@mkland.ru\n";
        mail($to, $email_subject, $email_body, $headers);
        $msg= "Ваша заявка отправлена";
}
echo true;
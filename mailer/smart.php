<?php 

$user_phone = $_POST['user_phone'];
$user_about = $_POST['user_about'];
$user_name = $_POST['user_name'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'unitech85@mail.ru';                 // Наш логин
$mail->Password = 'maklaren1410';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('unitech85@mail.ru', 'Александр Владимирович');   // От кого письмо 
$mail->addAddress('snarsky93@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новая заявка с сайта';
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	Имя: ' . $user_name . ''; 
	Телефон: ' . $user_phone . '';
	Необходимые материалы: ' . $user_about . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    echo "Error";
} else {
		header('location: thankyou.html');
}

?>
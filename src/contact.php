<?php
$mail->Host       = "ssl://mail.alzaabigroup.com"; // SMTP server example
$mail->SMTPDebug  = 0;                     // enables SMTP debug information (for testing)
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->Port       = 465;                    // set the SMTP port for the GMAIL server
// $mail->Username   = "support@aesmc.com"; // SMTP account username example
// $mail->Password   = "AesmcSup##2022$";        // SMTP account password example


$to    			= "adameveuae@gmail.com";

$name     = $_POST["name"];
$email    = $_POST["email"];
$website  = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

if (isset($email) && isset($name)) {
    $subject  = "$name sent you a message via LandinPage";
	$headers  = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	$headers .= "From: ".$name." <".$email.">\r\n"."Reply-To: ".$email."\r\n" ;
	$msg      = 'Hello Admin, <br/> <br/> Here are the message details:';
	$msg     .= ' <br/> <br/> <table border="1" cellpadding="6" cellspacing="0" style="border: 1px solid  #eeeeee;">';
	foreach ($_POST as $label => $value) {
	    $msg .= "<tr><td width='100'>". ucfirst($label) . "</td><td width='300'>" . $value . " </tr>";
	}
	$msg      .= " </table> <br> --- <br>This e-mail was sent from $website";	 
	$mail =  mail($to, $subject, $msg, $headers);


	if($mail) {
		 header("Location: http://aesmc.com/ayurveda");

	} else {
		header("Location: http://aesmc.com");
	}

} 

?>
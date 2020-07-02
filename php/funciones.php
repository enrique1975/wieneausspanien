<?php
$nombre = $_POST['nombre'];
$tlf = $_POST['tlf'];
$emailing = $_POST['mail'];
$asunto = $_POST['asunto'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function enviarMail($nombre, $tlf, $emailing, $asunto){
		require './PHPMailer/src/Exception.php';
		require './PHPMailer/src/PHPMailer.php';
		require './PHPMailer/src/SMTP.php';

		$email = "eneshe@hotmail.com";
		$remite = 'Weine aus Spanien';
		$mensaje = $asunto;
		
		// Instantiation and passing `true` enables exceptions
		$mail = new PHPMailer(true);

		try {
			//datos del que envia
			$mail->SMTPDebug = 0;                                       			// Enable verbose debug output
			$mail->isSMTP();                                            			// Set mailer to use SMTP
			$mail->Host       = 'smtp.live.com';  									// Specify main and backup SMTP servers
			$mail->SMTPAuth   = true;                                   			// Enable SMTP authentication
			$mail->Username   = 'weineausspanien@hotmail.com';           			// SMTP username
			$mail->Password   = 'Republika3';                             			// SMTP password
			$mail->SMTPSecure = 'tls';                                  			// Enable TLS encryption, `ssl` also accepted
			$mail->Port       = 587;                                    			// TCP port to connect to

			//Recectores
			$mail->setFrom('weineausspanien@hotmail.com', $remite);
			$mail->addAddress($email, $remite);     								// Add a recipient
			$mail->addCC($emailing, $remite);										// con copia

			
			$mail->isHTML(true);                                  					// Set email format to HTML
			$mail->Subject = 'Solicitud de informacion';
			$mail->Body    = $nombre . "<br>" . $tlf . "<br>"  . $emailing . "<br>"  . $asunto . "<br>Mensaje recibido correctamente. En breve contactaremos";
			
			$mail->send();
		} catch (Exception $e) {
			echo "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
		}
				
	}

	enviarMail($nombre, $tlf, $emailing, $asunto);
?>
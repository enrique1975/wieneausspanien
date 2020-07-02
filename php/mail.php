<?php
	echo"
	<div id='pantalla'><button type='button' class='cerrar1' id='cerrar1' onclick='cerrar()'><span class='cierra1'>x</span></button>
		<form  action='./php/funciones.php' method='POST' class='mail' name='forMail' id='mail'>
			<label for='fname'>Name:</label><br>
			<input type='text' id='fname' name='fname' class='mailInp' autofocus onclick='posicionMail()'><br>
			<label for='lname'>Telefono:</label><br>
			<input type='text' id='lname' name='lname' class='mailInp' onclick='posicionMail()'>
			<label for='mailer'>Mail:</label><br>
			<input type='mail' id='mailer' name='mailer'  placeholder='   a@a.com' class='mailInp' onclick='posicionMail()'><br>
			<label for='texto'>Asunto:</label><br>
			<textarea  placeholder='Escribeme...' id='texto' name ='texto' onclick='posicionMail()'></textarea>
			<input id ='enviar' type='button' value='Enviar' name='Enviar' class='enviaMail' onclick='enviando()'>
		</form>
	</div>
	"
?>
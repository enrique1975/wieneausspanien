<?php
	$json =  $_POST['carrito'];
	echo "
	<div id='pantalla'><button type='button' class='cerrar1' id='cerrar1' onclick='cerrar()'><span class='cierra1'>x</span></button>
		<form action='bodega1.html' method='POST' id='form' name='fact'>
			<table id='fact'>
				<tbody>
					<tr>
						<th  id='nombreFact1'>Rechnungsdaten</th><th><!--<button type='button' class='cerrar1' id='cerrar1' onclick='cerrar()'><span class='cierra1'>x</span>--></button></th>
					</tr>
					<tr>
						<td id='nombreFact'>Name oder Firma:</td>
						<td><input  type='text' name='nombreF' value='' class='inputDatos' autofocus></td>
					</tr>	
					<tr>
						<td id='nombreFact'>Steuernummer:</td>
						<td><input type='text' title='Indique un nif' name='nifF' class='inputDatos'  onclick='posicionForm(this)' value=''></td>
					</tr>
					<tr>
						<td id='nombreFact'>Adresse:</td>
						<td><input type='text' title='Indique una direccion' name='direccionF' class='inputDatos'  onclick='posicionForm(this)'  value='' ></td>
					</tr>
					<tr>
						<td id='nombreFact'>Stadt</td>
						<td><input type='text' name='ciudadF' title='Indique una ciudad' class='inputDatos'  onclick='posicionForm(this)' value=''></td>
					</tr>
					<tr>
						<td id='nombreFact'>Postleitzahl:</td>
						<td><input type='text' title='Indique un codigo postal' class='inputDatos'  name='codigoPostalF' onclick='posicionForm(this)' value=''></td>
					</tr>
					<tr>
						<td id='nombreFact1'>Land:</td>
						<td><input type='text' name='paisF' value='Deutschland'  class='inputDatos' onclick='posicionForm(this)' disabled></td>
					</tr>
					<tr>
						<td id='nombreFact'>E-Mail-Adresse:</td>
						<td><input type='text' name='mailF' title='Indique un mail'  class='inputDatos' onclick='posicionForm(this)' value=''></td>
					</tr>
					<tr>
						<td id='nombreFact'>E-Mail-Adresse bestätigen:</td>
						<td><input type='text' name='mail2F' title='Confirme mail' class='inputDatos'  onclick='posicionForm(this)' value=''></td>	
					</tr>
					<tr>
						<td id='nombreFact'>Telefonnummer:</td>
						<td><input type='text' name='telefonoF' title='Indique un telefono'  class='inputDatos' onclick='posicionForm(this)'   value=''></td>
					</tr>
					<tr>
						<td colspan='2' id='nombreFact'><input type='checkbox' class='checkDatos' name='politicaDatos' class='inputDatos'  value='politicaDatos'><a href='#'  class='inputDatos' id='proteccionDatos'>Ich akzeptiere die Datenschutzerklärung</a></td>
					</tr>
					<tr>
						<td colspan='2'><input type='button' value='Akzeptieren' name='Aceptar' class='datos1' onclick='compruebaForm()'><input type='button' value='Löschen' name='Limpiar' class='datos2' onclick='limpiaForm()'></td>
					</tr>
					<tr>
						<th  id='nombreFact1'>Rechnungsdaten</th><th><!--<button type='button' class='cerrar1' id='cerrar1' onclick='cerrar()'><span class='cierra1'>x</span>--></button></th>
					</tr>
				</tbody>
			</table>
		</form>
	<div class='carritoFact'>";
	$precioTotal=0;	
	$botellas=0;
	echo"<table ><tr><td>Artikel</td><td>Preis / Stück</td><td>Menge</td></tr>";
	for ($i=0; $i<count(json_decode($json)); $i++){
		echo "<tr>";
		for ($j=0; $j<count(json_decode($json)[$i]); $j++){
			if ($j == 0){
				echo "<td>".json_decode($json)[$i][$j]."</td>";
			}
			if($j == 1){
				echo "<td>".json_decode($json)[$i][$j]." €</td>";
			}
			if($j == 2){
				$botellas = $botellas + json_decode($json)[$i][2];
				echo "<td>".json_decode($json)[$i][$j]."</td>";
			}
			
		}
		$precioTotal = $precioTotal+ (json_decode($json)[$i][1]*json_decode($json)[$i][2]);
	}

	echo "</tr><tr><td colspan='3'>Gesamteinkauf: ".$precioTotal." €</td></tr>";
	if ($botellas==1){
		echo "</tr><tr><td colspan='3'>Verpackung und Versand: ".$botellas." Flasche * 4 €: " .($botellas*4)." €</td></tr>";
	}
	else{
		echo "</tr><tr><td colspan='3'>Verpackung und Versand: ".$botellas." Flaschen * 4 €: " .($botellas*4)." €</td></tr>";
	}
	echo "</tr><tr><td colspan='3'>Endbetrag: ".($precioTotal + ($botellas*4)). " €</td></tr>";
	echo"</table></div></div>"; 
?>
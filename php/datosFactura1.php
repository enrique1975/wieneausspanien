<?php
	$json =  $_POST['carrito'];
	echo "
	<div id='pantalla'><button type='button' class='cerrar1' id='cerrar1' onclick='cerrar()'><span class='cierra1'>x</span></button>
		<div class='contenedorFormu' id='contenedorFormu'>
			<div class='pasos' id='dFacturacion' tabindex='0'onclick='despliegue(this)'>
				<p>Rechnungsdaten</p>
				<button type='button' class='cerrar2' id='cerrar1' onclick='cerrar()'><span class='cierra1'>+</span></button>
				<div id='contieneDatos1'>
					<form action='bodega1.html' method='POST' id='form' name='fact'>
						<table>
							<tbody>
								<tr>
									<td id='nombreFact'>Name oder Firma:</td>
									<td><input  type='text' title='Indique un nombre' name='nombreF' value='' class='inputDatos' autofocus></td>
								</tr>	
								<tr>
									<td id='nombreFact'>Steuernummer:</td>
									<td><input type='text' title='Indique un nif' name='nifF' class='inputDatos'  onclick='posicionForm(this)' value=''></td>
								</tr>
								<tr>
									<td id='nombreFact'>Straße:</td>
									<td><input type='text' name='telefonoF' title='nombre de calle'  class='inputDatos' onclick='posicionForm(this)'   value=''></td>
								</tr>
								<tr>
									<td id='nombreFact'>Hausnummer:</td>
									<td><input type='text' name='mailF' title='Numero de calle'  class='inputDatos' onclick='posicionForm(this)' value=''></td>
								</tr>
								<tr>
									<td id='nombreFact'>Stock:</td>
									<td><input type='text' name='mailF' title='Indique un piso'  class='inputDatos' onclick='posicionForm(this)' value=''></td>
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
									<td colspan='2'><input type='button' value='Akzeptieren' name='Aceptar' class='datos1' onclick='compruebaForm()'><input type='button' value='Löschen' name='Limpiar' class='datos2' onclick='limpiaForm()'></td>
								</tr>
							</tbody>
						</table>
					</form>
				</div>
			</div>
			<div class='pasos' id='dEnvio' tabindex='0'>
				<p>Versanddaten</p>
				<button type='button' class='cerrar2' id='cerrar1' onclick='cerrar()'><span class='cierra1'>+</span></button>
				<div class='contieneDatos2'>
				<form action='bodega1.html' method='POST' id='form1' name='fact1'>
			<table>
				<tbody>
					<tr>
						<td  colspan='2'><input type='checkbox'  class='checkDatos' name='misma' value='' onchange='mismosDatos(this)'> Klicken Sie hier, wenn es diesselbe Adresse ist</td>
					</tr>
					<tr>
						<td id='nombreFact'>Name oder Firma:</td>
						<td><input  type='text' title='Indique un nombre' name='nombreE' id='nameE' class='inputDatos' onclick='posicionForm2(this)'></td>
					</tr>	
					<tr>
						<td id='nombreFact'>Steuernummer:</td>
						<td><input type='text' title='Indique un nif' name='nifE' id='SteuernummerE'class='inputDatos'  onclick='posicionForm2(this)' value=''></td>
					</tr>
					<tr>
						<td id='nombreFact'>Straße:</td>
						<td><input type='text' name='strasseF' id='strasseE' title='nombre de calle'  class='inputDatos' onclick='posicionForm2(this)'   value=''></td>
					</tr>
					<tr>
						<td id='nombreFact'>Hausnummer:</td>
						<td><input type='text' name='numerF' id='numerE' title='Numero de calle'  class='inputDatos' onclick='posicionForm2(this)' value=''></td>
					</tr>
					<tr>
						<td id='nombreFact'>Stock:</td>
						<td><input type='text' name='stockF' id='stockE' title='Indique un piso'  class='inputDatos' onclick='posicionForm2(this)' value=''></td>
					</tr>
					<tr>
						<td id='nombreFact'>Stadt</td>
						<td><input type='text' name='ciudadF' id='stadtE' title='Indique una ciudad' class='inputDatos'  onclick='posicionForm2(this)' value=''></td>
					</tr>
					<tr>
						<td id='nombreFact'>Postleitzahl:</td>
						<td><input type='text' title='Indique un codigo postal' class='inputDatos'  name='codigoPostalF' id='postleitzahlE' onclick='posicionForm2(this)' value=''></td>
					</tr>
					<tr>
						<td id='nombreFact1'>Land:</td>
						<td><input type='text' name='paisF' value='Deutschland'  class='inputDatos' onclick='posicionForm2(this)' disabled></td>
					</tr>
					<tr>
						<td  colspan='2'><input type='checkbox'  class='checkDatos' name='misma' value='' onclick='mismosDatos()'> Ich habe die Datenschutzerklärung gelesen und akzeptiert</td>
					</tr>
					
					<tr>
						<td colspan='2'><input type='button' value='Akzeptieren' name='Aceptar' class='datos1' onclick='compruebaForm()'><input type='button' value='Löschen' name='Limpiar' class='datos2' onclick='limpiaForm()'></td>
					</tr>
				</tbody>
			</table>
		</form>
				</div>
			</div>
			<div class='pasos' id='dPago' tabindex='0'>
				<p>Pasar por caja</p>
				<button type='button' class='cerrar2' id='cerrar1' onclick='cerrar()'><span class='cierra1'>+</span></button>
				<div class='contieneDatos'>
				</div>
			</div>
			<div class='pasos' id='pRealizado' tabindex='0'>
				<p>Pago realizado</p>
				<button type='button' class='cerrar2' id='cerrar1' onclick='cerrar()'><span class='cierra1'>+</span></button>
				<div class='contieneDatos'>
				</div>
			</div>
		</div>
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

<!--<tr>
						<td colspan='2' id='nombreFact'><input type='checkbox' class='checkDatos' name='politicaDatos' class='inputDatos'  value='politicaDatos'><a href='#'  class='inputDatos' id='proteccionDatos'>Ich akzeptiere die Datenschutzerklärung</a></td>
					</tr>-->

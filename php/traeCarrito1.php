<?php
	$json =  $_POST['carrito'];

	$precioTotal=0;	
	$botellas=0;
	echo"
		<table class='factura' id='tablaEnrolla'><thead id='enrolla'><tr class='carro' id='titulos'><th class='carro' id='anchSc'>Artikel</th><th class='carro' id='anchSc'>Preis / Stück</th><th class='carro' id='anchSc'>Menge</th></tr></thead><button type='button' class='cerrar' id='cerrar2' onclick='cerrar()'><span class='cierra'>x</span></button>
		<tbody class='enrolla' id='tablaFac'>";
	for ($i=0; $i<count(json_decode($json)); $i++){
		echo "<tr class='carro' id='alto'>";
		for ($j=0; $j<count(json_decode($json)[$i]); $j++){
			if ($j == 0){
				echo "<td id='nombreV' class='carro'>&nbsp;&nbsp;&nbsp;".json_decode($json)[$i][$j]."</td>";
			}
			if($j == 1){
				echo "<td id='precioV' class='carro'>&nbsp;&nbsp;&nbsp;".json_decode($json)[$i][$j]." €</td>";
			}
			if($j == 2){
				$botellas = $botellas + json_decode($json)[$i][2];
				echo "<td id='cantidadV' class='carro'><button type='button' class='restaC'   id='".($i + 1)."' onclick='restaC(this)'>─</button><span class='nBotellas' id='nBotellas'>".json_decode($json)[$i][$j]."</span><button type='button' class='sumaC'  id='".($i + 1)."' onclick='sumaC(this)'>+</button></td></tr>";
			}
			
		}
		$precioTotal = $precioTotal+ (json_decode($json)[$i][1]*json_decode($json)[$i][2]);
		
	}
	
	if (count(json_decode($json))==0){
		echo "</tr><tr class='carro' id='totalVI'><td colspan='3' id='totalV' class='carro'>&nbsp;&nbsp;&nbsp; Ohne Artikel im Einkaufswagen</td></tr></tbody></table>";
	}
	else{
		echo "</tbody>";
		echo "<tfoot  id='enrolla2'></tr><tr class='carro'><td colspan='3' id='totalV' class='carro'>&nbsp;&nbsp;&nbsp;Gesamteinkauf: ".$precioTotal." €</td></tr>";
		if ($botellas==1){
			echo "</tr><tr class='carro'><td colspan='3' id='gastos' class='carro'>&nbsp;&nbsp;&nbsp;Verpackung und Versand: ".$botellas." Flasche * 4 €: " .($botellas*4)." €</td></tr>";
		}
		else{
			echo "</tr><tr class='carro'><td colspan='3' id='gastos' class='carro'>&nbsp;&nbsp;&nbsp;Verpackung und Versand: ".$botellas." Flaschen * 4 €: " .($botellas*4)." €</td></tr>";
		}
		echo "</tr><tr class='carro'><td colspan='3' id='gastosT' class='carro'>&nbsp;&nbsp;&nbsp;Endbetrag: ".($precioTotal + ($botellas*4)). " €</td></tr>";
		echo "</tr><tr><td colspan='3' id='gastosT'class='carro'> <button type='button' class='resta'   id='comprar' value='comprar' onclick='datosFactura()'>Kaufen</button></td></tr>";
	}
	echo"</tfoot></table>";
?>
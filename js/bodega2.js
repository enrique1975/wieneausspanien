/*window.addEventListener("orientationchange", ()=> {
	alert('cambio');
   document.getElementById("botonA").style.visibility = "hidden";
});*/
/*function orientacionCambiada()
{
    alert(window.orientation);
}

window.addEventListener("orientationchange", orientacionCambiada, false);
function submenuNo(){
	document.getElementById("submenu").style.visibility="hidden";
}
*/
var anchura = 0;
var pruebaBody = document.getElementsByTagName("body")[0].offsetHeight;
var pruebaBody1 = document.getElementsByTagName("body")[0].clientHeight;
var pruebaBody2 = document.getElementsByTagName("body")[0].scrollHeight;


var pruebaBodyA = document.getElementsByTagName("body")[0].offsetWidth;
var pruebaBodyA1 = document.getElementsByTagName("body")[0].clientWidth;
var pruebaBodyA2 = document.getElementsByTagName("body")[0].scrollWidth;
window.addEventListener("orientationchange", ()=> {
	if(window.orientation==90){
		document.getElementById("hamburguesa").style.visibility = "hidden";
		document.getElementById("botonA").style.visibility = "hidden";
		anchura = screen.height;
		anchura = (anchura*82)/100;
		//alert (anchura);
	}
	if(window.orientation==0){
		document.getElementById("hamburguesa").style.visibility = "visible";
		document.getElementById("botonA").style.visibility = "visible";
		anchura = screen.width;
		anchura = (anchura*82)/100;
		//alert (anchura);
	}
});

var carrito = new Array();
var posi = 0;
var tamañoFila;
var posicionScroller;
var aux=0;
var claseHamburg=0;
var ausFactura = false;
function traer(elemento){
	
	document.getElementById("submenu").style.marginLeft = "0%";
	var archivoPhp ="";

	switch(elemento.value){
		case "D.O. Rioja":
			archivoPhp = "./php/rioja.php";
			break;
		case "D.O. R. Duero":
			archivoPhp = "./php/duero.php";
			break;
		case "D.O. Valdepeñas": 
			archivoPhp = "./php/valdepeñas.php";
			break;
		case "D.O. Rueda":
			archivoPhp = "./php/rueda.php";
			break;
		case "D.O. Navarra":
			archivoPhp = "./php/navarra.php";
			break;
		case "D.O. La Mancha":
			archivoPhp = "./php/laMancha.php";
			break;
		case "D.O. Penedes":
			archivoPhp = "./php/penedes.php";
			break;
		case "D.O. Cariñeda":
			archivoPhp = "./php/cariñeda.php";
			break;
		case "D.O. Rias Baixas":
			archivoPhp = "./php/riasBaixas.php";
			break;
		case "D.O. Ribeiro":
			archivoPhp = "./php/ribeiro.php";
			break;
		case "traeCarrito":
			archivoPhp = "./php/traeCarrito.php";
			break;
		
	}
	if(screen.width>=420){
		document.getElementById("submenu").style.visibility="visible";
		var ajaxRequest;
		
		if(window.XMLHttpRequest){
			ajaxRequest = new XMLHttpRequest();
		}
		else{
			ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState===4 && ajaxRequest.status===200){
				document.getElementById("submenu").innerHTML=ajaxRequest.responseText;
			}
		}
		
		ajaxRequest.open("POST", archivoPhp, true);
		ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajaxRequest.send();
	}
	else{
		//alert("movil " + archivoPhp);
		traerMovil(archivoPhp);
	}
}
function traerMovil(archivoPhp){
	var ausCarrito = false;
	var ancho=screen.width;
	ancho = (ancho*98.7)/100;
//Adapto el nombre al archivo php para movil con tabla de 2 columnas y 3 filas
	arrNombrearch = archivoPhp.split(".");
	archivoPhp = "." + arrNombrearch[1] + "M." + arrNombrearch[2];
    denominacion = arrNombrearch[1].split("/");
	
	
	if(document.getElementById("hamburguesa").className === "cruz"){
		
		document.getElementsByTagName('nav')[0].style.transition ="1.5s";	
		document.getElementsByTagName('nav')[0].style.transform = "translate("+-ancho+"px)";
	}
	var ajaxRequest;
		if(window.XMLHttpRequest){
			ajaxRequest = new XMLHttpRequest();
		}
		else{
			ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState===4 && ajaxRequest.status===200){
				document.getElementById("submenu").innerHTML=ajaxRequest.responseText;
			}
		}
		ajaxRequest.open("POST", archivoPhp, true);
		ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajaxRequest.send();
		
	document.getElementById("submenu").getAttribute("style");
    document.getElementById("submenu").removeAttribute("style");
	document.getElementById("submenu").setAttribute("class", "submenuMovil");
	document.getElementById("submenu").scrollTop = 0;
	claseHamburg=4;
	setTimeout (function (){
			document.getElementById("submenu").style.visibility = "visible";
			document.getElementById("submenu").style.transition ="1.5s";	
			document.getElementById("submenu").style.transform = "translate("+ancho+"px)";
			cargaValoresMovil();
	},500);
	cambiaBoton();	
}
function factura(){
	document.getElementsByTagName('nav')[0].style.visibility = "hidden";
	document.getElementById("miCarrito").style.visibility = "hidden";
	
	//document.getElementById("submenu").removeChild(table);
	var vista = document.getElementById("submenu");
	//esto elimina la tabla creada para que no aparezca cuando llamo a la factura
	if(aux==0){
		if (vista.hasChildNodes()){
			while (vista.childNodes.length >= 1){
				vista.removeChild(vista.firstChild);
			}
		}
		aux=1;
	}
	document.getElementById("submenu").style.visibility = "hidden";
	
	
	if(document.getElementById("pantalla")!=null){
		document.getElementById("pantalla").style.visibility="hidden";
	}
	var myJsonString = JSON.stringify(carrito);
	//document.getElementById("submenu").style.visibility="visible";
	var ajaxRequest;
	
	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	}
	else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState===4 && ajaxRequest.status===200){
			document.getElementById("submenu").innerHTML=ajaxRequest.responseText;
	// funcion enrollaScroll sace scroll en el div ***IMPORTANTE tiene un div enrolla1, porque en la table y en el tbody no pude hacerlo***  //		
			facturaScroll();
		
		}
	}
	ajaxRequest.open("POST", "./php/traeCarrito1.php", true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send("carrito="+myJsonString);
	/*
	if(tamañoFila==undefined || tamañoFila==""){
		setTimeout(function(){ tamañoFila = document.getElementById("cantidadV").clientHeight;}, 1000);
	}*/
	/*if (document.readyState == "complete") {
		document.getElementById("submenu").style.marginLeft = "-10%";
		document.getElementById("submenu").style.visibility="visible";
	}*/
	/*Como la pantalla nueva sale muy rapido, se carga lo anterior y despues lo nuevo
	  A simple vista no se ve.
	  Y si pongo setTimeout o readyState, se nota el parpadeo
	*/
	
	if(screen.width>420){
		document.getElementById("submenu").style.marginLeft = "-10%";
		document.getElementById("submenu").style.visibility="visible";
	}
	else{
		var ancho=screen.width;
		ancho = (ancho*99.7)/100;
		if(ausFactura==false){
			document.getElementById("submenu").getAttribute("style");
			document.getElementById("submenu").removeAttribute("style");
			document.getElementById("submenu").setAttribute("class", "submenuMovilCarrito");
		}
		document.getElementById("submenu").scrollTop = 0;
		
		var alt = document.getElementById("submenu").offsetHeight;
		
		setTimeout (function (){
			if(document.getElementById("tablaEnrolla").clientHeight < alt){
				//	alert(document.getElementById("submenu").offsetHeight);
				//	alert(document.getElementById("submenu").clientHeight);
				//	alert(document.getElementById("submenu").scrollWidth);
				//	alert(document.getElementById("tablaEnrolla").offsetHeight);
				//	alert(document.getElementById("tablaEnrolla").clientHeight);
				//	alert(document.getElementById("tablaEnrolla").scrollWidth);
					
					var pad = alt - document.getElementById("tablaEnrolla").clientHeight + 3.5;
				//	alert(document.getElementById("tablaEnrolla").offsetHeight);
				//	alert(pad);
					document.getElementById("enrolla2").lastChild.firstChild.style.paddingTop = pad + "px";
					//document.getElementById("enrolla2").lastChild.firstChild.style.paddingBottom = "5vw";
				//	document.getElementById("enrolla2").lastChild.firstChild.style.textAlign = "center";
	
					/*document.getElementById("enrolla2").lastChild.firstChild.style.borderBottom = "0px";
					document.getElementById("enrolla2").lastChild.style.borderBottom = "0px";
					document.getElementById("tablaEnrolla").style.borderBottom = "0px";*/
					document.getElementById("enrolla2").lastChild.firstChild.style.textAlign = "center";
					//fila.style.paddingTop = pad;
					
				}
		},100);
		
		setTimeout (function (){
			
		//	document.getElementsByClassName('factura').style.marginLeft = "0%";
			document.getElementById("submenu").style.visibility = "visible";
			if(ausFactura==false){
				document.getElementById("submenu").style.transition ="1.5s";	
				document.getElementById("submenu").style.transform = "translate("+ancho+"px)";
				ausFactura=true;
			}
			if(carrito.length==0){
				document.getElementById("totalV").style.border = "0px solid #733924";
				document.getElementById("totalVI").style.border = "0px solid #733924";
				document.getElementById("totalVI").style.borderTop = "2px solid #733924";
				//document.getElementById("totalVI").style.paddingTop = "5%";
				/*document.getElementById("tablaEnrolla").style.border = "0px solid #733924";
				document.getElementById("tablaEnrolla").style.width = "105%";*/
				//document.getElementById("tablaFac").style.paddingTop = "5%";
				document.getElementById("enrolla").style.border = "0px solid #733924";
				document.getElementById("titulos").style.border = "0px solid #733924";
				//document.getElementsByClassName('carro').
			}
			else{
				/*table tr:last-child {
				color: #fff;
				background-color: #000;*/
				//if(document.getElementById("tablaEnrolla").clientHeight < alt){
				//	alert(document.getElementById("submenu").offsetHeight);
				//	alert(document.getElementById("submenu").clientHeight);
				//	alert(document.getElementById("submenu").scrollWidth);
				//	alert(document.getElementById("tablaEnrolla").offsetHeight);
				//	alert(document.getElementById("tablaEnrolla").clientHeight);
				//	alert(document.getElementById("tablaEnrolla").scrollWidth);
					
				//	var pad = alt - document.getElementById("tablaEnrolla").clientHeight + 3.5;
				//	alert(document.getElementById("tablaEnrolla").offsetHeight);
				//	alert(pad);
				//	document.getElementById("enrolla2").lastChild.firstChild.style.paddingTop = pad + "px";
					//document.getElementById("enrolla2").lastChild.firstChild.style.paddingBottom = "5vw";
				//	document.getElementById("enrolla2").lastChild.firstChild.style.textAlign = "center";
	
					/*document.getElementById("enrolla2").lastChild.firstChild.style.borderBottom = "0px";
					document.getElementById("enrolla2").lastChild.style.borderBottom = "0px";
					document.getElementById("tablaEnrolla").style.borderBottom = "0px";*/
					//fila.style.paddingTop = pad;
				//}
				document.getElementById("enrolla2").lastChild.firstChild.style.textAlign = "center";
				
				/*if(document.getElementById("tablaEnrolla").style.height < "60%"){
					document.getElementById("tablaEnrolla").rows[document.getElementById("tablaEnrolla").rows.length];
					alert(document.getElementById("tablaEnrolla").rows.length);
				}*/
				
			}
			cargaValoresMovil();
		},500);
		
			
		
		//document.getElementById("submenu").style.visibility="visible";
	}
	/*
	setTimeout(function(){ 	document.getElementById("submenu").style.marginLeft = "-10%";
							document.getElementById("submenu").style.visibility="visible";
						 }, 10);*/
	//facturaScroll();
}
	
	//document.getElementById("tablaFac").scrollTop = y;

function facturaScroll(){
	if(screen.width>=420){
		if(document.getElementById("enrolla2")){
			var ancho = document.getElementById("enrolla2").clientWidth;
			var pie = document.getElementById("enrolla2").offsetHeight;
		}
		var pantalla = screen.height;
		var altura = (pantalla * 35)/100;
		var caja = document.getElementById("tablaEnrolla").offsetHeight;
		var cuerpo = document.getElementById("tablaFac").offsetHeight;
	
	
	var cabeza = document.getElementById("enrolla").offsetHeight;
	
	
	var total = pantalla/2;
	var contiene = (caja *50)/100;// -(cabeza+pie);
	
	var tamaño = (caja*100)/altura;
//	document.getElementById("tablaFac").style.height =  cuerpo + "px";
	document.getElementById("enrolla").style.display = "table";
	document.getElementById("enrolla").style.width = "100%";
	document.getElementById("tablaFac").style.display = "block"; 
	if(document.getElementById("enrolla2")){
		document.getElementById("enrolla2").style.display = "table";
	}
	document.getElementById("tablaEnrolla").style.width = ancho + "px";
	/*document.getElementById("tablaFac").style.width = ancho + "px";
	document.getElementById("enrolla").style.width = ancho + "px";
	document.getElementById("enrolla2").style.width = ancho + "px"; */
	}
	
	if (altura<cuerpo){
		document.getElementById("tablaEnrolla").style.height = altura +"px";
		document.getElementById("tablaFac").style.height =  "100%";
		document.getElementById("tablaFac").style.overflowY = "auto";
		document.getElementById("tablaFac").style.visibility = "visible";
		document.getElementById("tablaFac").scrollTop = posicionScroller;
		var anchoScroll = (document.getElementById("enrolla").scrollWidth - document.getElementById("tablaFac").clientWidth)/3;
		//alert(anchoScroll);
		var anchoTh = (document.getElementById("anchSc").clientWidth - anchoScroll); 
		//creo que esta es la buena
		//alert (anchoTh);
		document.getElementById("anchSc").style.width = anchoTh;
		//document.getElementById("titulos").style.paddingRight = anchoScroll+"px";
		//alert (document.getElementById("anchSc").clientWidth);
		
		//alert (document.getElementById("nombreV").clientWidth);
		/*alert (document.getElementById("tablaEnrolla").scrollWidth);
		alert (document.getElementById("tablaFac").clientWidth);
		alert (screen.width);*/
		
	}
	if(screen.width<=420){
		document.getElementById("anchSc").style.width =  "25%";
		
	}
	
}
function datosFactura(){
	document.getElementsByTagName('nav')[0].style.visibility = "hidden";
	document.getElementById("miCarrito").style.visibility = "hidden";
	document.getElementById("pie").style.visibility = "hidden";
	var myJsonString = JSON.stringify(carrito);
	var ajaxRequest;
	
	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	}
	else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState===4 && ajaxRequest.status===200){
			document.getElementById("submenu").innerHTML=ajaxRequest.responseText;
			
		}
	}
	ajaxRequest.open("POST", "./php/datosFactura1.php", true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send("carrito="+myJsonString);
	
	setTimeout(function(){ document.getElementById('dFacturacion').click(); }, 200);
	
}
function brillo(elemento){
	cargaValores(elemento);
	elemento.style.backgroundColor = "#D99873";
	elemento.querySelector("#cuenta").style.visibility = "visible";
	elemento.querySelector("#c1").style.visibility = "visible";
	elemento.querySelector("#c2").style.visibility = "visible";
	elemento.querySelector("#c3").style.visibility = "visible";
}
function normal(elemento){
	elemento.style.backgroundColor = "";
	elemento.querySelector("#cuenta").style.visibility = "hidden";
	elemento.querySelector("#c1").style.visibility = "hidden";
	elemento.querySelector("#c2").style.visibility = "hidden";
	elemento.querySelector("#c3").style.visibility = "hidden";
	if(screen.width<420){
		elemento.querySelector("#cuenta").style.backgroundColor = "#D99873";
		elemento.querySelector("#cuenta").style.visibility = "visible";
		elemento.querySelector("#c1").style.visibility = "visible";
		elemento.querySelector("#c2").style.visibility = "visible";
		elemento.querySelector("#c3").style.visibility = "visible";
	}
}

function sumaC(elemento){
	
	var filas = elemento.id;
	var fila = filas-1;
	var marca= document.getElementById("tablaFac").rows[fila].cells[0].innerHTML;
	var precio= document.getElementById("tablaFac").rows[fila].cells[1].innerHTML;
	
	var cantidad= document.getElementById("tablaFac").rows[fila].cells[2].childNodes[1].innerHTML;
	
	document.getElementById("tablaFac").rows[fila].cells[2].childNodes[1].innerHTML =parseInt(cantidad)+1;
	
	carrito[fila][2] = carrito[fila][2] + 1;
	cuentaBotellas();
	factura();
	posicionScroller = document.getElementById("tablaFac").scrollTop;
	//posicionScroll();
}
function suma(elemento){
	
	var contenedor = elemento.parentNode;
	var cantidad = contenedor.querySelector("#cantidad");
	var modifica = cantidad.value;
	var suma = parseInt(modifica) + 1;
	cantidad.value = suma;
	var contenedorTodo = contenedor.parentNode;
	var nombre = contenedorTodo.querySelector("#nombreVino");
	var precioUnidad = contenedorTodo.querySelector("#c3");
	
	var vino = nombre.innerHTML;
	// Esto corta precio: 12 €; por los espacios y cojo solo el numero convirtiendolo a integer
	var precio = precioUnidad.innerHTML.split(" ");
	// El array compra tiene que estar creado aqui para que cada vez se escriba uno nuevo e ingreso los datos que necesito
	var compra = new Array();
	compra[0] = vino;
	compra[1] = parseInt(precio[1]);
	compra[2] = suma;

	if(carrito.length > 0){
	// variable auxiliar que si encuentra el mismo vino, lo modifica y sale del bucle, en caso contrario hace el push	
		var aux = false;
		for(var i=0; i<carrito.length; i++) {
		//Bucle que recorre el array que está en la posición i
			if(aux==false){
				for(var j=0; j<carrito[i].length; j++) {
					if (aux==true){break;}
					if(carrito[i][0]==vino){
						carrito[i][2]= suma;
						aux=true;
					}
				}
			}
		}
		if (aux==false){
			carrito.push(compra);
		}
	}
	else{
		carrito.push(compra);
	}
	console.log(carrito);
	cuentaBotellas();
}
function cargaValores(elemento){
	
	var id;
	var cant;
	var nombre = elemento.querySelector("div").querySelector("#nombreVino").textContent;
	
	if(carrito.length>0){
		for(var i=0; i<carrito.length; i++) {
			for(var j = 0; j<carrito[i].length; j++){
				id = carrito[i][0];
				cant = carrito[i][2];
				if (nombre == id){
					elemento.querySelector("div").querySelector("#cuenta").querySelector("#cantidad").value = cant;
					break;
				}
			}
		}
	}
}
function cargaValoresMovil(){
	nodos = document.querySelectorAll('#nombreVino');
	for(var i=0; i<nodos.length; i++) {
		for(var j=0; j<carrito.length; j++){
			if(nodos[i].innerHTML==carrito[j][0]){
				nodos[i].nextSibling
						.nextSibling
						.nextSibling
						.nextSibling
						.nextSibling
						.nextSibling
						.nextSibling
						.nextSibling
						.nextSibling
						.nextSibling
						.nextSibling
						.querySelector("#cantidad").value = carrito[j][2];
			}
		}
	}
}
function restaC(elemento){
	
	var filas = elemento.id;
	
	var fila = filas-1;
	
	
	var marca= document.getElementById("tablaFac").rows[fila].cells[0].innerHTML;
	var precio= document.getElementById("tablaFac").rows[fila].cells[1].innerHTML;
	
	var cantidad= document.getElementById("tablaFac").rows[fila].cells[2].childNodes[1].innerHTML;
	document.getElementById("tablaFac").rows[fila].cells[2].childNodes[1].innerHTML =parseInt(cantidad)-1;
	
	carrito[fila][2] = carrito[fila][2] - 1;
	cuentaBotellas();
	if (cantidad==1){
		document.getElementById("tablaFac").deleteRow(fila);
		carrito.splice((fila),1);
	}
	factura();
	posicionScroller = document.getElementById("tablaFac").scrollTop;
	//posicionScroll();
}
function resta(elemento){
	var contenedor = elemento.parentNode;
	var cantidad = contenedor.querySelector("#cantidad");
	var modifica = cantidad.value;
	var resta = parseInt(modifica);
	
	var contenedorTodo = contenedor.parentNode;
	var nombre = contenedorTodo.querySelector("#nombreVino");
	var vino = nombre.innerHTML;
	if (resta == 0){
		cantidad.value = resta;
	}
	else{
		
		// aqui tengo que leer y actualizar el array carrito[]
		var aux = false;
		for(var i=0; i<carrito.length; i++) {
		//Bucle que recorre el array que está en la posición i
			if(aux==false){
				for(var j=0; j<carrito[i].length; j++) {
					if (aux==true){break;}
					if(carrito[i][0]==vino){
						carrito[i][2]= resta - 1;
						resta = resta - 1;
						if (carrito[i][2]==0){
							//aqui deberia borrar el array que tiene 0 pedidos
							carrito.splice(i,1);
							break;
						}
						aux=true;
					}
				}
			}
		}
		//resta = parseInt(modifica) - 1;
		cantidad.value = resta;
	}
	console.log(carrito);
	cuentaBotellas();
}
function cerrar(){
	document.getElementById("submenu").style.visibility = "hidden";
	document.getElementsByTagName('nav')[0].style.visibility = "visible";
	document.getElementById("pie").style.visibility="visible";
	document.getElementById("miCarrito").style.visibility = "visible";
	document.getElementById("pantalla").style.height = "100%";
	if(document.getElementById('form')){
		document.getElementById('form').style.visibility='hidden';
	}
	if(document.getElementById('tablaFac')){
		document.getElementById('tablaFac').style.visibility='hidden';
	}
	if(document.getElementById('pantalla')){
		document.getElementById('pantalla').style.visibility='hidden';
	}
	factu=[];
	console.log(factu);
}
function cuentaBotellas(){
	var numero=0;
	for(var i=0; i<carrito.length; i++) {
		for(var j=0; j<carrito[i].length; j++) {
			numero = numero + carrito[i][2];
			break;
		}
	}
	document.getElementById("botellas").textContent = numero;
}
var factu = new Array();

function posicionForm(elemento){
	var posicion = factu.length;
	
	if(document.fact.getElementsByTagName("input")[8].value!=="" && posicion==7){
		factu.push(document.fact.getElementsByTagName("input")[8].value);
		document.fact.getElementsByTagName("input")[8].disabled = true;
		document.fact.getElementsByTagName("input")[8].disabled = true;
	}
	document.fact.getElementsByTagName("input")[posicion].focus();
	
	if(document.fact.getElementsByTagName("input")[posicion].value!==""&& posicion !=6){
		document.fact.getElementsByTagName("input")[posicion].disabled = true;
		factu.push(document.fact.getElementsByTagName("input")[posicion].value);
		document.fact.getElementsByTagName("input")[posicion+1].focus();
	}
	if(document.fact.getElementsByTagName("input")[6].value!=="" && posicion ==6){
		document.fact.getElementsByTagName("input")[6].disabled = true;
		factu.push(document.fact.getElementsByTagName("input")[6].value);
		factu.push(document.fact.getElementsByTagName("input")[7].value);
		document.fact.getElementsByTagName("input")[factu.length].focus();
	}
	if(elemento!==document.fact.getElementsByTagName("input")[posicion]&&document.fact.getElementsByTagName("input")[posicion].value===""){
		document.fact.getElementsByTagName("input")[posicion].style.backgroundColor = "#ffb3b3";
		
	
	}
	else{
		document.fact.getElementsByTagName("input")[posicion].style.backgroundColor = "white";
			
	}
	/*
	if(factu.length==7){
			compruebaMail();
	}
	if(factu.length==8){
			compruebaMail();
			mailIgual();
	}
	*/
	window.event.stopPropagation(); 
	console.log(factu);
	
}

function posicionForm1(elemento){
	
	for (var i = 0; i<document.forms[0].length; i++){
	document.forms[0][i].style.backgroundColor="white";
		if(elemento.name==document.forms[0][i].name){
			break;
		}
		if(document.forms[0][i].value==""){
			document.forms[0][i].focus();
			document.forms[0][i].style.backgroundColor="#ffb3b3";
			break;
		}
	}
	window.event.stopPropagation(); 
}
var auxMail = 0;
var nombre;
var tlf;
var mail;
var asunto;
function posicionMail(){
	if (document.forMail.getElementsByTagName("input")[0].value===""){
		document.forMail.getElementsByTagName("input")[0].focus();
		document.forMail.getElementsByTagName("input")[0].style.backgroundColor = "#ffb3b3";
	}else if(document.forMail.getElementsByTagName("input")[0].value!=="" && document.forMail.getElementsByTagName("input")[1].value==="" && auxMail == 0){
		document.forMail.getElementsByTagName("input")[0].disabled = true;
		document.forMail.getElementsByTagName("input")[0].style.backgroundColor = "white";
		document.forMail.getElementsByTagName("input")[1].focus();
		auxMail = 1;
	}else if(document.forMail.getElementsByTagName("input")[0].value!=="" && document.forMail.getElementsByTagName("input")[1].value==="" && auxMail == 1){
		document.forMail.getElementsByTagName("input")[0].disabled = true;
		document.forMail.getElementsByTagName("input")[0].style.backgroundColor = "white";
		document.forMail.getElementsByTagName("input")[1].focus();
		document.forMail.getElementsByTagName("input")[1].style.backgroundColor = "#ffb3b3";
	}else if(document.forMail.getElementsByTagName("input")[1].value!=="" && document.forMail.getElementsByTagName("input")[2].value==="" && auxMail == 1){
		auxMail = 2;
		document.forMail.getElementsByTagName("input")[1].disabled = true;
		document.forMail.getElementsByTagName("input")[1].style.backgroundColor = "white";
		document.forMail.getElementsByTagName("input")[2].focus();
	}else if(document.forMail.getElementsByTagName("input")[1].value!=="" && document.forMail.getElementsByTagName("input")[2].value==="" && auxMail == 2){
		document.forMail.getElementsByTagName("input")[2].style.backgroundColor = "#ffb3b3";
		document.forMail.getElementsByTagName("input")[2].focus();
	}else if(document.forMail.getElementsByTagName("input")[2].value!=="" && document.forMail.getElementsByTagName("textarea")[0].value==="" && auxMail == 2){
		auxMail = 3;
		document.forMail.getElementsByTagName("input")[2].disabled = true;
		document.forMail.getElementsByTagName("input")[2].style.backgroundColor = "white";
		document.forMail.getElementsByTagName("textarea")[0].focus();
	}else if(document.forMail.getElementsByTagName("input")[2].value!=="" && document.forMail.getElementsByTagName("textarea")[0].value==="" && auxMail == 3){
		document.forMail.getElementsByTagName("textarea")[0].focus();
		document.forMail.getElementsByTagName("textarea")[0].style.backgroundColor = "#ffb3b3";
	}
	
window.event.stopPropagation(); 
}
function enviando(){
	if(document.forMail.getElementsByTagName("textarea")[0].value===""){
		posicionMail();
	}
	else{
		/*aqui ejecutar ajax que llame a php que envie mail y presente imagen con enviando*/
		nombre = document.forMail.getElementsByTagName("input")[0].value;
		tlf = document.forMail.getElementsByTagName("input")[1].value;
		mail = document.forMail.getElementsByTagName("input")[2].value;
		asunto = document.forMail.getElementsByTagName("textarea")[0].value;
		document.forMail.getElementsByTagName("textarea")[0].style.backgroundColor = "white";
		//document.getElementById('mail').style.backgroundColor ='red';
		var divi = document.createElement("div");
		var efecto = document.createElement("div");
		efecto.setAttribute("class", "girando");
		divi.setAttribute("class", "note");
		document.body.appendChild(divi);
		divi.appendChild(efecto);
		//setTimeout (eMail, 10, nombre, tlf, mail, asunto);
		//async function Llenador_push(matriz, elem) 
		eMail(nombre, tlf, mail, asunto);
		
		setTimeout (function (){efecto.remove();
								},1300);
		setTimeout (function (){						
								auxMail = 0;
								if(document.getElementById('mail')){
									document.getElementById('mail').style.visibility="hidden";
								}
								if(document.getElementById("submenu")){
									document.getElementById("submenu").style.backgroundColor = "rgba(0,0,0, 0)";
								}
								document.getElementsByTagName('nav')[0].style.visibility = "visible";
								document.getElementById("miCarrito").style.visibility = "visible";
								document.getElementById("pie").style.visibility="visible";
								
								divi.remove();
								},1500);
		/*setTimeout (function (){divi.remove();
								},2000);	*/				  
	}
}
function eMail(nombre, tlf, mail, asunto){
	var ajaxRequest;
	
	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	}
	else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState===4 && ajaxRequest.status===200){
			document.getElementById("submenu").innerHTML=ajaxRequest.responseText;
	// funcion enrollaScroll sace scroll en el div ***IMPORTANTE tiene un div enrolla1, porque en la table y en el tbody no pude hacerlo***  //		
			//facturaScroll();
		
		}
	}
	ajaxRequest.open("POST", "./php/funciones.php", true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send("nombre=" + nombre + "&tlf=" + tlf + "&mail=" + mail + "&asunto=" + asunto);
	
}
	
/*
	***
	Estoy por aqui, ya cierra el primer form cuando esta lleno, ahora faltaria abrir el siguiente y seguir
	
	***
*/
function compruebaForm(){
	if(factu.length<6){
		document.fact.getElementsByTagName("input")[factu.length].focus();
		document.fact.getElementsByTagName("input")[factu.length].style.background = "#ffb3b3";
	}
	else if(factu.length==6 && document.fact.getElementsByTagName("input")[6].value===""){
		document.fact.getElementsByTagName("input")[6].focus();
		document.fact.getElementsByTagName("input")[6].style.backgroundColor = "#ffb3b3";
	}
	else if(factu.length==6 && document.fact.getElementsByTagName("input")[6].value!==""){
	/*	if(compruebaTlf()==true){*/
			factu.push(document.fact.getElementsByTagName("input")[6].value);
			factu.push(document.fact.getElementsByTagName("input")[7].value);
			document.fact.getElementsByTagName("input")[6].disabled = true;
			document.fact.getElementsByTagName("input")[6].style.backgroundColor = "white";
			document.fact.getElementsByTagName("input")[7].disabled = true;
			document.fact.getElementsByTagName("input")[7].style.backgroundColor = "white";
			document.fact.getElementsByTagName("input")[8].focus();
			//document.fact.getElementsByTagName("input")[8].disabled = true;
	}
	else if(factu.length>6 && factu.length<10){
		document.fact.getElementsByTagName("input")[factu.length].focus();
		document.fact.getElementsByTagName("input")[factu.length].style.background = "#ffb3b3";
	}
	else if(factu.length==10 && document.fact.getElementsByTagName("input")[10].value!==""){
		factu.push(document.fact.getElementsByTagName("input")[10].value);
		document.fact.getElementsByTagName("input")[10].disabled = true;
		document.fact.getElementsByTagName("input")[10].style.backgroundColor = "white";
	/*}
	else{*/
		document.getElementById('form').style.visibility='hidden';
		setTimeout(function(){
				document.getElementById('dFacturacion').style.height='3.8%';
				//document.getElementById('contenedorFormu').style.height='46%';
				//document.getElementById('dFacturacion').style.height='3.8%'; 
			document.getElementById('dEnvio').style.height='100%'; 
		}, 200);
			/*var alto = 33.5;
			setInterval(function(){
				//document.getElementById('dEnvio').style.height='100%'; 
				while(alto<43){
				alto = alto+0.5;
				
				document.getElementById('contenedorFormu').style.height=String(alto) + "%";
				}
			}, 200);
			*/
			/*setTimeout(function(){
				//document.getElementById('dEnvio').style.height='100%'; 
				
				
			}, 200);*/
	}
			// document.getElementById('dFacturacion').style.height='3.8%'; 
	/*	}*/
		/*if(document.getElementsByName("politicaDatos")[0].checked){
			alert('oki')
		}
		else{
			document.getElementById("proteccionDatos").style.color = "red";
		}*/
	
	//document.getElementById('contenedorFormu').style.height='46%';
	/*else if(factu.length==9 && !document.getElementsByName("politicaDatos")[0].checked){
		document.getElementById("proteccionDatos").style.color = "red";
	}*/
	
	/*else{
		compruebaTlf();
		
	}*/
	console.log(factu);
}
function limpiaForm(){
	document.fact.getElementsByTagName("input")[factu.length].value="";
	for (var i=0; i<fact.length; i++){
		if(i==7){
			document.fact.getElementsByTagName("input")[i].value ="Deutschland";
		}
		else if(i==11){
			document.fact.getElementsByTagName("input")[i].value ="Akzeptieren";
			document.fact.getElementsByTagName("input")[i].disabled = false;
		}
		else if(i==12){
			document.fact.getElementsByTagName("input")[i].value ="Löschen";
		}
		else{
			document.fact.getElementsByTagName("input")[i].value="";
			document.fact.getElementsByTagName("input")[i].disabled = false;
			document.fact.getElementsByTagName("input")[i].style.backgroundColor = "white";
			
		}
	}
	/*document.getElementsByName("politicaDatos")[0].checked=false;
	document.getElementById("proteccionDatos").style.color = "blue";*/
	factu = [];
	document.fact.getElementsByTagName("input")[0].focus();
	console.log(factu);
}
function compruebaMail(){
	var control = RegExp(/^[a-z]{1,}[@][a-z]{1,}[.][a-z]{2,3}$/);
	var mail1 = factu[6];
	var mail2 = factu[7];
	
	if (!control.test(mail1) && factu.length==7){
		factu.splice(6, 1);
		document.fact.getElementsByTagName("input")[6].style.backgroundColor = "#ffb3b3";
		document.fact.getElementsByTagName("input")[6].value ="";
		document.fact.getElementsByTagName("input")[6].disabled = false;
		document.fact.getElementsByTagName("input")[6].focus();
	}
	if (!control.test(mail2) && factu.length==8){
		factu.splice(7, 1);
		document.fact.getElementsByTagName("input")[7].style.backgroundColor = "#ffb3b3";
		document.fact.getElementsByTagName("input")[7].value ="";
		document.fact.getElementsByTagName("input")[7].disabled = false;
		document.fact.getElementsByTagName("input")[7].focus();
	}
	
}
function mailIgual(){
	var mail1 = factu[6];
	var mail2 = factu[7];
	if(mail1!=mail2 && factu.length==8){
		factu.splice(6, 2);
		document.fact.getElementsByTagName("input")[7].style.backgroundColor = "#ffb3b3";
		document.fact.getElementsByTagName("input")[7].disabled = false;
		document.fact.getElementsByTagName("input")[6].style.backgroundColor = "#ffb3b3";
		document.fact.getElementsByTagName("input")[6].disabled = false;
		document.fact.getElementsByTagName("input")[6].focus();
	}
}
function compruebaTlf(){
	var tlf = document.fact.getElementsByTagName("input")[8].value;
	var control = RegExp(/^[+34|0034|34]?[6|7|8|9][0-9]{8}$/);
	if(control.test(tlf)){
		return true;
	}
	else{	
		document.fact.getElementsByTagName("input")[8].value ="";
		document.fact.getElementsByTagName("input")[8].focus();
		document.fact.getElementsByTagName("input")[8].style.backgroundColor = "#ffb3b3";
	}
	
}
function ajax1(elemento){
	elemento.style.height='100%';
	elemento.style.overflow='hidden';
	
	var pagina;
	if (elemento.id=='dFacturacion'){
		pagina = "traeForm.php";	
			}
	if (elemento.id=='dEnvio'){
		pagina = "traeForm.php";
			}
	if (elemento.id=='dPago'){
		pagina = "traeForm.php";
			}
	if (elemento.id=='pRealizado'){
		pagina = "traeForm.php";
			}
		var ajaxRequest;
		
		if(window.XMLHttpRequest){
			ajaxRequest = new XMLHttpRequest();
		}
		else{
			ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState===4 && ajaxRequest.status===200){
				elemento.querySelector("div").innerHTML=ajaxRequest.responseText;
			}
		}
		ajaxRequest.open("POST", pagina, true);
		ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajaxRequest.send();
		window.event.stopPropagation(); 
}

function datosForm(){
	
	var ajaxRequest;
	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	}
	else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState===4 && ajaxRequest.status===200){
			document.getElementById('contieneDatos1').innerHTML=ajaxRequest.responseText;
	
	}

		}

	ajaxRequest.open("POST", "traeForm.php", true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send();
}

function despliegue (elemento){
	elemento.style.height='100%';
	//elemento.style.overflow='hidden';
	elemento.querySelector('form').style.visibility='visible';
}
var envio = new Array();
function mismosDatos(elemento){
	var nombre = document.getElementById("nameE");
	var nif = document.getElementById("SteuernummerE");
	var calle = document.getElementById("strasseE");
	var numero = document.getElementById("numerE");
	var planta = document.getElementById("stockE");
	var ciudad = document.getElementById("stadtE");
	var postal = document.getElementById("postleitzahlE");
	if(elemento.checked) {
		nombre.value = factu[0];
		nombre.disabled = true;
		nombre.style.backgroundColor = "white";
		envio.push(nombre.value);
		nif.value = factu[1];
		nif.disabled = true;
		nif.style.backgroundColor = "white";
		envio.push(nif.value);
		calle.value = factu[2];
		calle.disabled = true;
		calle.style.backgroundColor = "white";
		envio.push(calle.value);
		numero.value = factu[3];
		numero.disabled = true;
		numero.style.backgroundColor = "white";
		envio.push(numero.value);
		planta.value = factu[4];
		planta.disabled = true;
		planta.style.backgroundColor = "white";
		envio.push(planta.value);
		ciudad.value = factu[5];
		ciudad.disabled = true;
		ciudad.style.backgroundColor = "white";
		envio.push(ciudad.value);
		postal.value = factu[6];
		postal.disabled = true; 
		postal.style.backgroundColor = "white";
		envio.push(postal.value);
		envio.push('Deutschland');
	}
	else{
		nombre.value = '';
		nombre.disabled = false;
		nif.value = '';
		nif.disabled = false;
		calle.value = '';
		calle.disabled = false;
		numero.value = '';
		numero.disabled = false;
		planta.value = '';
		planta.disabled = false;
		ciudad.value = '';
		ciudad.disabled = false;
		postal.value = '';
		postal.disabled = false; 
		envio = [];
	}
	console.log(envio);
}
function enviarMail(){
	document.getElementsByTagName('body')[0].style.backgroundColor ="rgba(255,255,255, 0.03)";
	document.getElementsByTagName('nav')[0].style.visibility = "hidden";
	document.getElementById("miCarrito").style.visibility = "hidden";
	document.getElementById("submenu").style.visibility="visible";
	document.getElementById("pie").style.visibility="hidden";
	window.scrollTo(0,0);
	
	var ajaxRequest;
	
	if(window.XMLHttpRequest){
		ajaxRequest = new XMLHttpRequest();
	}
	else{
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState===4 && ajaxRequest.status===200){
			document.getElementById("submenu").innerHTML=ajaxRequest.responseText;
		}
	}
	
	ajaxRequest.open("POST", "./php/mail.php", true);
	ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajaxRequest.send();
	claseHamburg=2;
	cambiaBoton();
}


// me quedo por aqui //
function posicionForm2(elemento){
	var posicion = envio.length+1;
	document.fact1.getElementsByTagName("input")[posicion].focus();
	if(document.fact1.getElementsByTagName("input")[posicion].value!==""&& posicion <7){
		document.fact1.getElementsByTagName("input")[posicion].disabled = true;
		envio.push(document.fact1.getElementsByTagName("input")[posicion].value);
		document.fact1.getElementsByTagName("input")[posicion+1].focus();
	}
	if(elemento!==document.fact1.getElementsByTagName("input")[posicion]&&document.fact1.getElementsByTagName("input")[posicion].value===""){
		document.fact1.getElementsByTagName("input")[posicion].style.backgroundColor = "#ffb3b3";
		
	
	}
	else{
		document.fact1.getElementsByTagName("input")[posicion].style.backgroundColor = "white";
			
	}
	/*
	if(envio.length<7){
		document.fact1.getElementsByTagName("input")[envio.length+1].focus();
		document.fact1.getElementsByTagName("input")[envio.length+1].style.background = "#ffb3b3";
		
	}
	*/
	//envio.push(document.fact1.getElementsByTagName("input")[envio.length+1].value);
	 
}
function movil(){
	if(screen.width<=420){
		
		/*
			esto tampoco funciona
			<meta http-equiv="ScreenOrientation" content="autoRotate:disabled">
			
		*/
	/*screen.msLockOrientation.lock("portrait-primary");
	screen.mozLockOrientation.lock("portrait-primary");

	screen.orientation.lock("portrait-primary");*/
	/*  if (event.orientation == 'landscape') {
     navigator.screenOrientation.set('portrait');
    } 
    if (event.orientation == 'portrait') {
     navigator.screenOrientation.set('portrait');
    }*/
	//navigator.screenOrientation.normal();
	//window.matchMedia("(orientation: portrait)").matches;
	/*screen.orientation.lock("portrait-primary");*/
		/*
		esta linea la tengo que revisar, porque he calculado el clientHeight, offsetHeight
		  y me da la misma cantidad. Luego calculo scrollHeight y le resto 140 px para que el
		  background del fondo sea mas pequeño que el tamaño de la pantalla.
		  Con la anchura tambien lo he hecho, pero hay que modificar la posicion del carrito
		*/
		//alert(pruebaBodyA2);
		//window.screen.lockOrientationUniversal("portrait");
		document.getElementsByTagName("body")[0].style.height = (pruebaBody-140) + "px";
	//	document.getElementsByTagName("body")[0].style.width = (pruebaBodyA-14) + "px";
		var botonA = document.createElement("div");
		var hamburguesa = document.createElement("div");
		hamburguesa.setAttribute("class", "hamburguesa");
		hamburguesa.setAttribute("id", "hamburguesa");
		
		botonA.setAttribute("class", "botonA");
		botonA.setAttribute("id", "botonA");
		botonA.setAttribute('onclick','cambiaBoton()');
		document.body.appendChild(botonA);
		botonA.appendChild(hamburguesa);
	}
	
}
function cambiaBoton(){
	if(claseHamburg!=2){document.getElementById("hamburguesa").setAttribute("class", "hamburguesa");}
	var ancho=screen.width;
	ancho = (ancho*82)/100;
	//alert (ancho);
	setTimeout (function (){
		document.getElementsByTagName('nav')[0].scrollTop = 0;
	},1000);	
	if(claseHamburg==0){
		claseHamburg=1;
		document.getElementById("botonA").style.transform = "translate("+ancho+"px)";
		document.getElementsByTagName('nav')[0].setAttribute("class", "menuMovil");
		setTimeout (function (){
			document.getElementById("hamburguesa").setAttribute("class", "cruz");
		},1000);
		document.getElementsByTagName('nav')[0].style.visibility = "visible";
		document.getElementsByTagName('nav')[0].style.transition ="1.5s";	
		document.getElementsByTagName('nav')[0].style.transform = "translate("+ancho+"px)";
	}
	else if(claseHamburg==1){
		claseHamburg=0;
		document.getElementById("botonA").style.transform = "translate(0px)";
		document.getElementsByTagName('nav')[0].style.transition ="1.5s";	
		document.getElementsByTagName('nav')[0].style.transform = "translate("+-ancho+"px)";	
	}
	else if(claseHamburg==2){
		claseHamburg=3;
		
		if(document.getElementById("hamburguesa").className !== "cruz"){
			setTimeout (function (){
				document.getElementById("botonA").style.transform = "translate("+ancho+"px)";
				document.getElementById("hamburguesa").setAttribute("class", "cruz");
			},0000);
		}
		/*setTimeout (function (){
			document.getElementById("hamburguesa").setAttribute("class", "cruz");
			
			},1000);*/
		
		setTimeout (function (){
			document.getElementById("mail").style.visibility = "visible";
			document.getElementById("mail").style.transition ="1.5s";	
			document.getElementById("mail").style.transform = "translate(102%)";
			},100);
		
	}
		//document.getElementsByTagName('nav')[0].setAttribute("class", "menuMovil");
	else if(claseHamburg==3){
		claseHamburg=0;
		document.getElementById("botonA").style.transform = "translate(0px)";
		setTimeout (function (){
			document.getElementById("mail").style.transition ="1.5s";	
			document.getElementById("mail").style.transform = "translate(0px)";
			
			
			},0000);
		setTimeout (function (){
			document.getElementById("miCarrito").style.visibility = "visible";
			document.getElementById("pantalla").style.visibility="hidden";
			document.getElementById("pie").style.visibility="visible";
		},1500);
		document.getElementsByTagName('nav')[0].style.transform = "translate(0px)";
	}
	else if(claseHamburg==4){
		claseHamburg=5;
		document.getElementById("hamburguesa").setAttribute("class", "flecha");
	}
	else if(claseHamburg==5){
		var anchura=screen.width;
		anchura = (ancho*98.7)/100;
		claseHamburg=1;
		document.getElementById("hamburguesa").setAttribute("class", "flechaV");
		setTimeout (function (){
			document.getElementById("hamburguesa").setAttribute("class", "cruz");
		},1000);
		setTimeout (function (){
			document.getElementById("submenu").style.visibility = "visible";
			document.getElementById("submenu").style.transition ="1.5s";	
			document.getElementById("submenu").style.transform = "translate("+-anchura+"px)";
		},500);
		setTimeout (function (){	
			document.getElementsByTagName('nav')[0].style.visibility = "visible";
			document.getElementsByTagName('nav')[0].style.transition ="1.5s";	
			document.getElementsByTagName('nav')[0].style.transform = "translate("+ancho+"px)";
		},1000);	
	}
}
movil();

window.addEventListener("orientationchange", ()=> {
	
	if(window.orientation==90){
		document.getElementsByTagName("body")[0].style.height = "auto";
		document.getElementById("botonA").setAttribute("class", "desaparece");
		document.getElementsByTagName('nav')[0].style.transition ="0s";	
		document.getElementsByTagName('nav')[0].style.transform = "translate(0px)";
		document.getElementsByTagName('nav')[0].classList.remove('nav');
		document.getElementsByTagName('nav')[0].setAttribute("class", "nav");
		//document.getElementsByTagName('nav')[0].style.visibility = "visible";
		/*document.getElementById("hamburguesa").style.visibility = "hidden";
		document.getElementById("botonA").style.visibility = "hidden";*/
	}
	if(window.orientation==0){
		// pregunto si no existe el boton hamburguesa, 
		// para no duplicar la funcion si se ha abierto primero la aplicacion con el movil horizontal
		if(!document.getElementById("hamburguesa")){
			movil();
		
		}
		else{
			if(document.getElementById("hamburguesa").className === "cruz"){
				document.getElementsByTagName('nav')[0].style.transition ="0s";	
				document.getElementsByTagName('nav')[0].style.transform = "translate("+anchura+"px)";	
			}
			else{
				document.getElementsByTagName('nav')[0].style.transform = "translate("+-anchura+"px)";
			}
		}
		document.getElementsByTagName('nav')[0].setAttribute("class", "menuMovil");
		document.getElementById("botonA").setAttribute("class", "botonA");
	}
});
/*
function posicionScroll(){
	
  
  posicionScroller = document.getElementById("enrolla1").scrollTop;
  
 // alert("La posicion del scroll es: "+posicionScroller);
	//var posicion = elemento.getBoundingClientRect();
	//var tamaño = document.getElementById("cantidadV").style.height;
	//alert(tamañoFila);
	//alert(posi);
	//posi = event.clientY; // coordenada vertical
	//alert(posi);
	//var posicion=document.getElementById("enrolla1").offsetTop;
	//alert(posi);
	//alert(posicion);
	//posi = posi - posicion;
	//alert(posi);
	//posi = document.getElementById("enrolla1").offsetTop;
	
	
	//document.getElementById("enrolla1").scrollTop = y;
}*/
/*
function repliegue(elemento){
	alert(elemento.parentNode.parentNode.parentNode);
	//elemento.style.height='5%';
	//elemento.style.overflow='hidden';
	//elemento.querySelector('form').style.visibility='hidden';
}
*/
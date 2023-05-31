times = 0;
function textBox() {
	if(times < 1) {
		document.getElementById("nombreCompleto").value = "";
		document.getElementById("nombreCompleto").style.color = "black";
	}
	times++;
}
function sumarNumeros(temp) {
	var cadena = "";
	for(x = 0; x < temp.length; x++) {
		cadena += temp[x];
		if (x != (temp.length - 1)) {
			cadena += " + ";
		}
		else {
			cadena += " = ";
		}
	}
	return cadena;
}
function reducir(temp) {
	var total = 0;
	if(temp.length > 1) {
		for(x = 0; x < temp.length; x++) {
			total += Number(temp[x]);
		}
	}
	else {
		return temp;
	}
	return total;
}
function letrasANumeros(temp) {
	var numeros = new Array();
	temp = temp.toLowerCase();
	for(x = 0; x < temp.length; x++) {
		switch(temp.charAt(x)) {
			case "a":
			case "j":
			case "s":
				numeros[numeros.length] = 1;
				break;
			case "b":
			case "k":
			case "t":
				numeros[numeros.length] = 2;
				break;
			case "c":
			case "l":
			case "u":
				numeros[numeros.length] = 3;
				break;
			case "d":
			case "m":
			case "v":
				numeros[numeros.length] = 4;
				break;
			case "e":
			case "n":
			case "w":
				numeros[numeros.length] = 5;
				break;
			case "f":
			case "o":
			case "x":
				numeros[numeros.length] = 6;
				break;
			case "g":
			case "p":
			case "y":
				numeros[numeros.length] = 7;
				break;
			case "h":
			case "q":
			case "z":
				numeros[numeros.length] = 8;
				break;
			case "i":
			case "r":
				numeros[numeros.length] = 9;
				break;
			default:
				break;
		}
	}
	return numeros;
}

function rasgos(temp) {
	temp = letrasANumeros(temp);
	return temp;
}
function talentosNaturales(temp) {
	var numeros = letrasANumeros(temp);
	var numTemp = numeros.length / 9;
	var maxNum = Number(numTemp.toFixed(0));
	var minNum = numTemp;
	var uno = 0;
	var dos = 0;
	var tres = 0;
	var cuatro = 0;
	var cinco = 0;
	var seis = 0;
	var siete = 0;
	var ocho = 0;
	var nueve = 0;
	if(maxNum > minNum) {
		maxNum++;
		minNum = (numTemp.toFixed(0)) - 2;
	}
	else if(maxNum < minNum) {
		maxNum += 2;
		minNum = (numTemp.toFixed(0)) - 1;
	}
	else if(maxNum == minNum) {
		maxNum++;
		minNum--;
	}
	for(a = 1; a < 10; a++) {
		for(x = 0; x < numeros.length; x++) {
			if(numeros[x] == a) {
				switch(a) {
					case 1:
						uno++;
						break;
					case 2:
						dos++;
						break;
					case 3:
						tres++;
						break;
					case 4:
						cuatro++;
						break;
					case 5:
						cinco++;
						break;
					case 6:
						seis++;
						break;
					case 7:
						siete++;
						break;
					case 8:
						ocho++;
						break;
					case 9:
						nueve++;
						break;
					default:
						break;
				}
			}
		}
	}
	canvas.innerHTML += "<u>Talentos Personales:</u> ";
	if(uno >= maxNum) {
		canvas.innerHTML += "|<b>1</b>| ";
	}
	if(dos >= maxNum) {
		canvas.innerHTML += "|<b>2</b>| ";
	}
	if(tres >= maxNum) {
		canvas.innerHTML += "|<b>3</b>| ";
	}
	if(cuatro >= maxNum) {
		canvas.innerHTML += "|<b>4</b>| ";
	}
	if(cinco >= maxNum) {
		canvas.innerHTML += "|<b>5</b>| ";
	}
	if(seis >= maxNum) {
		canvas.innerHTML += "|<b>6</b>| ";
	}
	if(siete >= maxNum) {
		canvas.innerHTML += "|<b>7</b>| ";
	}
	if(ocho >= maxNum) {
		canvas.innerHTML += "|<b>8</b>| ";
	}
	if(nueve >= maxNum) {
		canvas.innerHTML += "|<b>9</b>| ";
	}
	canvas.innerHTML += "<br>";
	canvas.innerHTML += "<u>Deficiencias Karmicas:</u> ";
	if(uno <= minNum) {
		canvas.innerHTML += "|<b>1</b>| ";
	}
	if(dos <= minNum) {
		canvas.innerHTML += "|<b>2</b>| ";
	}
	if(tres <= minNum) {
		canvas.innerHTML += "|<b>3</b>| ";
	}
	if(cuatro <= minNum) {
		canvas.innerHTML += "|<b>4</b>| ";
	}
	if(cinco <= minNum) {
		canvas.innerHTML += "|<b>5</b>| ";
	}
	if(seis <= minNum) {
		canvas.innerHTML += "|<b>6</b>| ";
	}
	if(siete <= minNum) {
		canvas.innerHTML += "|<b>7</b>| ";
	}
	if(ocho <= minNum) {
		canvas.innerHTML += "|<b>8</b>| ";
	}
	if(nueve <= minNum) {
		canvas.innerHTML += "|<b>9</b>| ";
	}
	canvas.innerHTML += "<br>";
}
function yoInterior(temp) {
	var yoInterior = 0;
	var nombres = temp.split(" ");
	for(q = 0; q < nombres.length; q++) {
		canvas.innerHTML += "Vocales de " + nombres[q]  + ": ";
		var nombreTemp = nombres[q].toLowerCase();
		var vocalesTemp = nombreTemp.split("");
		var cadenaDeVocales = "";
		for(x = 0; x < vocalesTemp.length; x++) {
			switch(vocalesTemp[x]) {
				case "a":
				case "e":
				case "i":
				case "o":
				case "u":
					cadenaDeVocales += vocalesTemp[x];
					break;
				default:
					break;
			}
		}
		var vocalesUno = letrasANumeros(cadenaDeVocales);
		canvas.innerHTML += sumarNumeros(vocalesUno);
		canvas.innerHTML += reducir(vocalesUno) + "<br>";
		yoInterior += reducir(vocalesUno);
	}
	canvas.innerHTML += "<u>Numero del Yo Interior:</u> <b>" + yoInterior + "</b>";
		for(;yoInterior > 9;) {
			var temp = yoInterior.toString();
			var tempArray = temp.split("");
			yoInterior = reducir(tempArray);
			canvas.innerHTML += "<b>/" + yoInterior + "</b>";
		}
		canvas.innerHTML += "<br>";
}
function yoExterior(temp) {
	var yoExterior = 0;
	var nombres = temp.split(" ");
	for(q = 0; q < nombres.length; q++) {
		canvas.innerHTML += "Consonantes de " + nombres[q]  + ": ";
		var nombreTemp = nombres[q].toLowerCase();
		var consTemp = nombreTemp.split("");
		var cadenaDeCons = "";
		for(x = 0; x < consTemp.length; x++) {
			switch(consTemp[x]) {
				case "a":
				case "e":
				case "i":
				case "o":
				case "u":
					break;
				default:
					cadenaDeCons += consTemp[x];
					break;
			}
		}
		var consUno = letrasANumeros(cadenaDeCons);
		canvas.innerHTML += sumarNumeros(consUno);
		canvas.innerHTML += reducir(consUno) + "<br>";
		yoExterior += reducir(consUno);
	}
	canvas.innerHTML += "<u>Numero del Yo Exterior:</u> <b>" + yoExterior + "</b>";
		for(;yoExterior > 9;) {
			var temp = yoExterior.toString();
			var tempArray = temp.split("");
			yoExterior = reducir(tempArray);
			canvas.innerHTML += "<b>/" + yoExterior + "</b>";
		}
		canvas.innerHTML += "<br>";
}
function actitud(){}
function planosDeExistencia(){}
function destino(temp) {
	canvas.innerHTML += "<u>Numero de Expresion:</u> ";
	var nombres = temp.split(" ");
	var nombreCompleto = "";
	for(x = 0; x < nombres.length; x++) {
		nombreCompleto += nombres[x];
	}
	var rasgosTemp = rasgos(nombreCompleto);
	canvas.innerHTML += sumarNumeros(rasgosTemp);
	var rasgosT = reducir(rasgosTemp);
	canvas.innerHTML += "<b>" + rasgosT + "</b>";
		for(;rasgosT > 9;) {
			var temp = rasgosT.toString();
			var tempArray = temp.split("");
			rasgosT = reducir(tempArray);
			canvas.innerHTML += "<b>/" + rasgosT + "</b>";
		}
		canvas.innerHTML += "<br>";
}

function natalicio(temp) {
	canvas.innerHTML += "<u>Numero de Natalicio:</u> <b>" + temp + "</b>";
	for(;temp.length > 1;) {
		temp = (reducir(temp)).toString();
		canvas.innerHTML += "<b>/" + temp + "</b>";
	}
	switch(Number(temp)) {
		case 3:
		case 6:
		case 9:
			canvas.innerHTML += " <b>Concordancia Aerea o Artistica</b><br>";
			break;
		case 1:
		case 5:
		case 7:
			canvas.innerHTML += " <b>Concordancia Acuatica o Cientifica</b><br>";
			break;
		case 2:
		case 4:
		case 8:
			canvas.innerHTML += " <b>Concordancia Ignea o Comercial</b><br>";
			break;
		default:
			break;
	}
}
function misionKarmica(tempd, tempm, tempa) {
	canvas.innerHTML += "<u>Numero de Mision Karmica:</u> " + tempd;
	for(;tempd.length > 1;) {
		tempd = (reducir(tempd)).toString();
		canvas.innerHTML += "/" + tempd;
	}
	canvas.innerHTML += " + " + tempm;
	for(;tempm.length > 1;) {
		tempm = (reducir(tempm)).toString();
		canvas.innerHTML += "/" + tempm;
	}
	canvas.innerHTML += " + " + tempa;
	for(;tempa.length > 1;) {
		tempa = (reducir(tempa)).toString();
		canvas.innerHTML += "/" + tempa;
	}
	canvas.innerHTML += " = ";
	var temp = Number(tempd) + Number(tempm) + Number(tempa);
	canvas.innerHTML += "<b>" + temp + "</b>";
	temp = temp.toString();
	for(;temp.length > 1;) {
		temp = (reducir(temp)).toString();
		canvas.innerHTML += "<b>/" + temp + "</b>";
	}

}
function Procesar() {
	if(document.getElementById("nombreCompleto").style.color == "gray") {
		return;
	}
	canvas = document.getElementById("canvas");
	canvas.innerHTML = "<hr><align=center><b><u>Analisis del nombre </u></b>";
	var nombreCompleto = document.getElementById("nombreCompleto").value;
	canvas.innerHTML += "<b><u>" + nombreCompleto + "</u></b><br>";
	var nombres = nombreCompleto.split(" ");
	var i = 0;
	var z = nombres.length;

	for(i = 0; i < nombres.length; i++) {
		canvas.innerHTML += "<u>Numero de Rasgos de " + nombres[i] + ":</u> ";
		var rasgosTemp = rasgos(nombres[i]);
		canvas.innerHTML += sumarNumeros(rasgosTemp);
		var rasgosT = reducir(rasgosTemp);
		canvas.innerHTML += "<b>" + rasgosT + "</b>";
		for(;rasgosT > 9;) {
			var temp = rasgosT.toString();
			var tempArray = temp.split("");
			rasgosT = reducir(tempArray);
			canvas.innerHTML += "<b>/" + rasgosT + "</b>";
		}
		canvas.innerHTML += "<br>";
	}
	talentosNaturales(nombreCompleto);
	yoInterior(nombreCompleto);
	yoExterior(nombreCompleto);
	actitud();
	planosDeExistencia();
	destino(nombreCompleto);

	canvas.innerHTML += "<hr><b><u>Analisis de la fecha de nacimiento </u></b>";
	var diaDeNac = document.getElementById("dia").selectedIndex;
	diaDeNac = document.getElementById("dia").options[diaDeNac].value;
	canvas.innerHTML += "<b><u>" + diaDeNac + " del </u></b>";
	var mesDeNac = document.getElementById("mes").selectedIndex;
	mesDeNac = document.getElementById("mes").options[mesDeNac].value;
	canvas.innerHTML += "<b><u>" + mesDeNac + " del </u></b>";
	var anoDeNac = document.getElementById("ano").selectedIndex;
	anoDeNac = document.getElementById("ano").options[anoDeNac].value;
	canvas.innerHTML += "<b><u>" + anoDeNac + "</u></b><br>";

	natalicio(diaDeNac);
	misionKarmica(diaDeNac, mesDeNac, anoDeNac);
}
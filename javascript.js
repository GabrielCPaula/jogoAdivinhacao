var numeroGerado;
var tentativas;

function novoJogo(){
	numeroGerado = Math.floor(Math.random() * 101);
	tentativas = 0;
	document.getElementById("resultado").innerHTML = "";
	document.getElementById("numeroDigitado").value = "";
}

function verificarAcerto() {
var numeroDigitado = parseInt(document.getElementById("numeroDigitado").value);
		
if(numeroDigitado < 0 || numeroDigitado > 100){
	alert("Por  favor digite um número de 1 a 100.");
	return;
}

tentativas++;

if (numeroDigitado === numeroGerado){
	var pontos = 100 - tentativas + 1 ;
	document.getElementById("resultado").innerHTML = "Parabéns! Você acertou em " + tentativas + " tentativa(s). Pontuação: " + pontos;
}
	else if (numeroDigitado< numeroGerado){
	document.getElementById("resultado").innerHTML = "Tente um número maior.";
} 
	else{
	document.getElementById("resultado").innerHTML = "Tente um número menor.";
}
}


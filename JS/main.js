

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.tecmundo.com.br/internet/133561-5-sites-incriveis-simples-te-ajudar-passar-tempo.htm");
    window.location.href = "https://www.tecmundo.com.br/internet/133561-5-sites-incriveis-simples-te-ajudar-passar-tempo.htm";
    //open abre em outra aba
    //href abre na mesma janela
}

function commouse(elemento){
    //document.getElementById("mousemove").innerHTML = "Pare agora, está doendo";
    elemento.innerHTML = "PARE AGORA! ESTÁ DOENDO!";
    //alert("trocar texto");
}

function semmouse(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("Página Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
var validar;

function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);

function soma(n1,n2){
    return n1 + n2;
}

//alert(soma(5,10));
*/

/*
var d = new Date();
alert(d); 
alert(d.getMonth()+1); //soma 1 pois começa do 0
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0;count<=5;count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/

/*
var idade = prompt("Qual dua idade?"); //guarda o valor digitado e
if (idade >= 18) {                     //coloca na variável idade
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var frutas = [{nome:"maçã", cor:"vemelho"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vemelho"}
console.log(fruta.nome);
console.log(fruta.cor);
*/

/*
var lista = ["maçã", "pera", "laranja"];
lista.push("uva"); //add a lista
//lista.pop(); //tira o último elemento
console.log(lista); //mostra no console do html

console.log(lista[0]);
console.log(lista.toString()[4]); 
console.log(lista.join(" ")) //define o que aparece entre os elemetnos da lista
*/

/*
var nome = "Vinícius Marques";
var n1 = 29;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert (nome + " tem " + idade + " anos");
//alert (idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLocaleUpperCase());
*/
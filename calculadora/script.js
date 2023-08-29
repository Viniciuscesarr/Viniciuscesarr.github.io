function insert(num){
    let numero = document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML = numero += num;
    
}
function clean(){
    document.querySelector("div#res").innerHTML = "";
}
function calcular(){

    let resultado = document.getElementById("res").innerHTML;
    if(resultado){
        document.getElementById("res").innerHTML = eval(resultado);
    }
}
let range = document.querySelector('#range');
let botao = document.querySelector('#botao');

let valor = document.querySelector('#valor');
let senha = document.querySelector('#senha');

let caixasenha = document.querySelector('#caixasenha');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
let novasenha = "";

valor.innerHTML = range.value;

range.oninput = function(){
    valor.innerHTML = this.value;
}


function Clicar(){
    let pass = ""
    for(let i = 0, n = charset.length; i < range.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
        

    }
    caixasenha.style.display = "block";
    caixasenha.innerHTML = `<p>${pass}</p>`;
    
}

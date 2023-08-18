function clicar(){
    var res = document.getElementById('res')
    var txt1 = document.getElementById('idia')
    var txt2 = document.getElementById('iden')
    var num1 = Number(txt1.value)
    var num2 = Number(txt2.value)
    var resultado = num1 / (num2 + 2)
    res.innerHTML = `Módulo: ${resultado}`
}
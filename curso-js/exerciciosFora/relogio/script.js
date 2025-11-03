var agora = new Date
var segundo = agora.getSeconds()
var minutos = agora.getMinutes()
var hora = agora.getHours()

var relogio = document.write(`var = { <br>
    Horas = ${hora} <br>
    Minutos = ${minutos} <br>
    Segundo = ${segundo} <br>
    }`)
function Contar() {
var ini = Number(document.getElementById('txtini').value)
var fim = Number(document.getElementById('txtfim').value)
var pas = Number(document.getElementById('txtpas').value)
var contagem = document.getElementById('contagem')

    if (ini == 0 || fim == 0 || pas == 0) {
        contagem.innerHTML = 'Impossivel de contar'

    } else {
        contagem.innerHTML = 'Contando: '
        
        if (pas <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            pas = 1
        }
        if (i < f) {
            // Contagem crescente
            for(ini ; ini <= fim ; i += pas)
                contagem.innerHTML += `${ini} 👉🏻`
        } else {
            // Contagem regressiva
            for(ini ; ini => fim ; ini -= pas) {
                contagem.innerHTML += `${ini} 👉🏻`
            }
        }
        contagem.innerHTML += `🏁`
    }
}
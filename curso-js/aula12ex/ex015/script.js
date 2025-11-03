function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //Bebe
                img.setAttribute('src', 'src/bebeHomem.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'src/jovemHomem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'src/adultoHomem.jpg')
            } else { 
                //Idoso
                img.setAttribute('src', 'src/idosoHomem.jpg')
            }   
        } else if (fsex[1].checked) {
           genero = 'Mulher' 
           if (idade >=0 && idade <10) {
                //Bebe
                img.setAttribute('src', 'src/bebeMulher.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'src/jovemMulher.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'src/adultaMulher.jpg')
            } else { 
                //Idoso
                img.setAttribute('src', 'src/idosaMulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

function gerar() {
    var num = Number(document.getElementById('txtnum').value)
    var linha = document.getElementById('tab')
    if (num == 0) {
        window.alert('Número invalido')
    } else {
        let c = 1
        linha.innerHTML = ''
        for (c ; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text = `${num} * ${c} = ${num * c} `
            linha.appendChild(item) //Adicionar um elemento filho
        }
    }
}

// (`${ini} x ${num} = ${ini * num}`)
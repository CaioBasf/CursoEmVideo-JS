
function adicionar() {
    let num = document.getElementById('txtn').value
    let item = document.createElement('option')
    let linha = document.getElementById('tab')
    item.text = `Valor ${num} adicionado`
    linha.appendChild(item)
    
}

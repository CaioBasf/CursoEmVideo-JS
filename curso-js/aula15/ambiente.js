let num = [500, 8000, 20, 9, 3]

num.push(1) // A ordem de procedencia importa
num.sort() // se trocar os dois de lugar o resultado muda
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1 ) {
    console.log('O valor não foi encontrado!')
} else {
console.log(`O valor está na posição ${pos} e`)
}
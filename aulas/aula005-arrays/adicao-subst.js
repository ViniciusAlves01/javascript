let vetor = [1,3,5,7] //Declaração do array.

console.log(`\nAntes da adição: ${vetor}`)

vetor[4] = 8 //Adiciona um elemento a partir da declaração da ultima posição do array.

vetor.push(9) //Adiciona um elemento na ultima posição do array, porém sem a necessidade de declarar qual é a última posição.

console.log(`\nDepois da adição: ${vetor}\n`)

vetor[0]=0 //Substituindo o elemento de posição '0'.

console.log(`Depois da substituição: ${vetor}\n`)

console.log('Exibição organizada:')
for(let i = 0; i<vetor.length;i++){
    console.log(`${vetor[i]}`)
}

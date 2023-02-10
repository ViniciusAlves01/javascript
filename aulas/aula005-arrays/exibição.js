let vetor = [1,3,5,7] //Declaração do array.
//1º Modo:
console.log('Primeiro Modo:')
for(let i = 0; i < vetor.length; i++){
    console.log(`Posição ${i} = ${vetor[i]}`)
}
console.log('\n')

//2º Modo:
console.log('Segundo Modo:')
for(let i in vetor){
    console.log(`Posição ${i} = ${vetor[i]}`)
}
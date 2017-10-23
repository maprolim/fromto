
console.log("Hello world");


var m = 'MaThEuS';

// console.log(m.toLowerCase());

function addOne (num) {
    // do something with parameters
    // and "return" something ex
    return num + 1
}

console.log(addOne(10))

var arr = [ 1, 2, 3 ]
//arr = 'mate'
var newArr = arr.map(function (a, b) {
    console.log(a)
    return b
})
console.log(newArr)

let arr2 = [3, 4, 9] //deixa você mudar o tipo e valor. Não tem vazamento de escopo.
const arr3 = [7, 10, 39] //dá erro se você mudar o tipo e o valor. Não tem vazamento de escopo.

//arr2 = 'mate'
//arr3 = 'mate'

// for (const x = 0; x < 10; x++) {
//     console.log(x)
// }

// const enviarEmailParaMeuChefe = () => {
//     // envia email
// }

// const result1 = addOne(5)
// const result2 = addTwo(result1)
// console.log(result2)


const newArr2 = arr.map((item, position) => item * position)
//   ^ é === a V
function fn (a, b) {
    return a * b
}

const arrOfObjects = [
    { a: 1 }, 
    { a: 4 }
]

const newArr3 = arrOfObjects.find (item => item.a === 4)
console.log(newArr3)

const math = {
    altura: 170,
    peso: 62,
    nome: 'matheus augusto de paiva rolim'
}
const mate = {
    altura: 168,
    peso: 78,
    nome: 'matheus costa de paiva'
}

const arrayOfPersons = [ math, mate ]
// arrow function
const result = arrayOfPersons.find(person => person.nome === 'matheus augusto de paiva rolim')
console.log(result)

const result02 = arrayOfPersons.filter(person => person.altura > 165)  //filter retorma uma array, find só mostra o primeiro resultado
console.log(result02)

const result03 = arrayOfPersons
  .map(person => person.nome)
  .map(personName => personName.toUpperCase())  
  .map(personNameUpperCase => personNameUpperCase.split(' '))
  .map(personNameArray => personNameArray[personNameArray.length - 1])
console.log(result03)
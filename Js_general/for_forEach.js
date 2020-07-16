//примеры

const obj = {
    a: 1,
    b: 2,
    c: 3
}


for (let i = 0; i<3; i++) {
    console.log(`${Object.keys(obj)[i]} = ${Object.values(obj)[i]}`)
}
console.log('-------------------------------')

for (let val in obj) {
    console.log(`${val} = ${obj[val]}`)
}
console.log('-------------------------------')

//for in обходит в строке все перечисляемые свойства, как в массиве и получает их значение. при этом строка приводится к объекту String
for (let ind in 'string') {
    console.log(ind)
}

console.log('-------------------------------')
//тоже самое, что и for in, только получаем значение каждого элемента
for(let char of 'string') {
    console.log(char)
}

console.log('-------------------------------')

Object.values(obj).forEach((el,index) => {
   console.log(`${Object.keys(obj)[index]} = ${el}`)
})

console.log('-------------------------------')
// Все три способа проводят иттерацию по объекту, но разными способами. 
// чтобы применить forEach, сначала потребовалось получить массив значений obj, а затем по нему иттерироваться.

//лайфхак, как проитерировать строку при помощи forEach

const string = 'string'

string.split('').forEach(el => console.log(el))
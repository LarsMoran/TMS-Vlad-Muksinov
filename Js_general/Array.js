const testArr = ['hi', 'hello']

const newArr = new Array()

console.log(testArr[1])

// методы

console.log(testArr.pop())//возвращает убранный элемент

console.log(testArr)

console.log(testArr.push('privet'))//возвращается длину массива с новым элеметов

console.log(testArr)

console.log(testArr.shift())

console.log(testArr)

console.log(testArr.unshift('nihao'))

console.log(testArr)

console.log(testArr.length)

//массивы копируются по ссылку

const b = testArr

const c = ['nihao', 'privet']

console.log(b === testArr)//true
console.log(testArr === c)//false

//--------------------------------------------

const arr = ['one', 'two', 'three', 'four']

arr.splice(4,0,'five')
arr.splice(0, 2)

console.log(arr)

console.log(arr.slice(0, 2))

const concatArr = ['one', 'two']
const concatArr2 = ['one', 'two']

console.log(concatArr.concat(concatArr2))

//-----------------------------------------

const findArr = ['1', '2', '3']

console.log(findArr.indexOf('1', 2))
console.log(findArr.lastIndexOf('1', 2))
console.log(findArr.includes('1'))

//----------------------------------------

const objArr = [
    {
        a:1,
        b:2
    },
    {
        a:3,
        b:4
    },
    {
        a:5,
        b:6
    }

]

const item = objArr.find(item => item.a === 3)

const filtered = objArr.filter(item => item.a>=3)

console.log(filtered)

const mapArr = ['gandalf', 'bilbo', 'frodo']

const payRespect = mapArr.map(item => item[0].toUpperCase() + item.slice(1))

console.log(payRespect)

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  let sortArr = [ 1, 2, 15 ];
  
  sortArr.sort(compareNumeric);
  
  console.log(sortArr);  // 1, 2, 15

  //прикольная фишка с реверс 

  const name = 'Gelo'

  const Oleg = name.split('').reverse().join('').toUpperCase()
  
  console.log(Oleg)
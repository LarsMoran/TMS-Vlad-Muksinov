/*number для любых чисел: целочисленных или чисел с плавающей точкой, целочисленные значения ограничены диапазоном ±2^53.
bigint для целых чисел произвольной длины.
string для строк. Строка может содержать один или больше символов, нет отдельного символьного типа.
boolean для true/false.
null для неизвестных значений – отдельный тип, имеющий одно значение null.
undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
object для более сложных структур данных.
symbol для уникальных идентификаторов.*/
//-------------------------------------------------

console.log(typeof Number)//вернет function. это объект-обертка, которая позволет нам приводит значение к number, если такое возможно. Либо вернет Nan
console.log(typeof Infinity)// number
console.log(typeof NaN)// number
console.log('прив'-25+13/14*5)// NaN, любой длины выражение, которое содержит операцию с нечисловым значением, вернет NaN
console.log(NaN === NaN)//false. NaN уникален и никогда не равен другому значению
console.log(isNaN(NaN))// true. Данным методом можно решить проблему невозможности сравнения двух NaN
console.log(parseInt('100$'))//100, парсит строку и возвращает полученное число до столкновения с ошибкой
//Math - объект, содержащий математические функции
console.log(Math.random())//вернут случайное число от 0 до 1
console.log(Math.max(1,2,3,4,5))//5
console.log(Math.min(1,2,3,4,5))//1
console.log(Math.pow(2, 3))//8, возводит число n в степень pow
//----------------------------------------------------

console.log(BigInt(10))//10n
console.log(10n===10)//false, BigInt не равен number с таким же значением
console.log(10n+BigInt(2))

//-------------------------------------------------------

console.log('string', `string with ${2+3}`)
console.log('string'.length)//6
console.log('string'[0], 'string'.charAt(0))// s, s
for (let ch of 'string') {
    console.log(ch)
}//перебор строки посимвольно
console.log('string'.toUpperCase())//STRING
console.log('StRiNg'.toLowerCase())//string
console.log('string'.indexOf('ri'))//2, отсчет начинается с 0
console.log('string'.includes('str'), 'string'.includes('Str'))//true false, чувствительность к регистру
console.log('string'.slice(2,3))//r со второго по третий символ, отсчет с 0
console.log('a'>'A')//true
console.log('    string      '.trim())//string
//В JS возможны методы работы со строками, потому что при каждом вызове метода примитив превращается в объект, который наследует методы от глобального String
const a = new String('string')
console.log(typeof a)// object
//--------------------------------------------------

//разница между объектом и примитивом

let c = {
    a: 1
}

let i = 'string'

let b = c

let h = i

b.a = 2

h = 'priv'

console.log(c, b , i, h)//значение объекта-исходника изменилось на 2, но мы переназначили объект, который присвоил себе значение c. Значение h  и i осталось своим

//------------------------------------------------------------


//сколько битов в int, минимальное и макс значение, методы techsith
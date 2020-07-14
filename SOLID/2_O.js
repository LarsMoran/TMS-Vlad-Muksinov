// OPEN CLOSE principle (Любые классы или объекты должны быть закрыты для модификаций, но открыты для расширения)

// создаем два класса Автобот и десиптикон, в которых мы, теоретически, захотим вызват трансформацию
class Autobot {
    constructor(name) {
        this.name = name
    }
}

class Deciptikon {
    constructor(name) {
        this.name = name
    }
}

const Ruslan = new Deciptikon('Десиптикон Руслан')

const Bogdan = new Autobot('Автобот Богдан')


// создаем класс трансформ, в котором определяем метод типа трансформации, что является не верным. При увеличении кол-ва типов роботов нам придется писать больше if
class Transform {
    constructor(array){
        this.arr=array
    }
    transformationType() {
        this.arr.map(el => {
            if(el.name.includes('Автобот')) {
                console.log(`${el.name} трансформировался в машину`)
            } 
            else if(el.name.includes('Десиптикон')) {
                console.log(`${el.name} трансформировался в самолет`)
        }
        //else if(новое условие) ...новая трансформация
        })
    }
}

const action = new Transform([Ruslan, Bogdan])


action.transformationType()

// -----------------------------------------

//правильный подход
// задаем каждому классу собственный метод transform
class Autobot2 {
    constructor(name) {
        this.name = name
    }
    transform() {
        return `${this.name} трансформировался в автомобиль`
    }
}

class Deciptikon2 {
    constructor(name) {
        this.name = name
    }
    transform() {
        return `${this.name} трансформировался в самолет`
    }
}

class Terminator {
    constructor(name) {
        this.name = name
    }
    transform() {
        return `${this.name} превратился в Арнольда Шварцнегера`
    }
}

const Armen = new Deciptikon2('Десиптикон Армен')

const Stasik = new Autobot2('Автобот Cтасик')

const Alina = new Terminator('Терминатор Алина')//при добавлении нового робота мы не будем изменять код внутри фукнции трансформера



class newTransform {
    constructor(arr){
        this.arr = arr
    }
    transformationType() {
        this.arr.map(el => {
            console.log(el.transform())//одно действие для каждого класа
        })
    }
}

const action2 = new newTransform([Armen, Stasik, Alina])
action2.transformationType()


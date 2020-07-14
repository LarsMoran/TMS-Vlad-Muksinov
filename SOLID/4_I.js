// Interface Segregation
// Класс млекопитающее, от которого наследуются Мышь, человек и дельфин. Все являются млекопитающими
class Mammal {
    constructor(name) {
        this.name = name
    }
    canEat(){
        console.log(`${this.name} can eat`)
    }

    canFly(){
        console.log(`${this.name} can Fly`)
    }

    canWalk(){
        console.log(`${this.name} can Walk`)
    }

    canSwim(){
        console.log(`${this.name} can Swim`)
    }
}

class Bat extends Mammal {
    //здесь есть canSwiw() и canWalk() по цепочке прототипов
}

class Humman extends Mammal {

}

class Dolphine extends Mammal {

}

const Alfred = new Dolphine('Alfred')
const Squeky = new Bat('Squeky')
Alfred.canFly()//Альфред не умеет летать. Он разобьется D:
Squeky.canFly()
Squeky.canSwim()

//-----------------------------------------------------

//создаем класс млекопитающее, которое будет иметь только те свойства и методы, которые присущи всем млекопитающим без исключения

class newMammal {
    constructor(name) {
        this.name = name
    }

    canEat(){
        console.log('all Mammals can eat')
    }
    //etc
}

//создаем псевдо интерфейсы, которые будут давать нашим животным только те умения, которыми они должны обладать

const swim = {
    canSwim(){
        console.log(`${this.name} can Swim`)
    }
}

const walk = {
    canWalk(){
        console.log(`${this.name} can Walk`)
    }
}

const fly = {
    canFly(){
        console.log(`${this.name} can Fly`)
    }
}

//Создаем новых животных из класса млекопитающих

const Man = new newMammal('Man')

const BatMan = new newMammal("I'm Batman!")

const newAlfred = new newMammal('Совсем как новый')

Object.assign(Man, swim, walk)
Object.assign(BatMan, fly, swim, walk)
Object.assign(newAlfred, swim)
newAlfred.canSwim()//Теперь с Альфредом все в порядке
BatMan.canFly()
Man.canWalk()

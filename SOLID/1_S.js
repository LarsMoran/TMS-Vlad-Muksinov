// Single Responsibility (каждый объект имеет одну ответственность)

const storage = {}

class Animal {
    constructor(name){
        this.name = name //привязываем локальную переменную name
    }
    getAnimalName() {
        return this.name //получаем имя животного
    }
    saveAnimal() {
        return storage.a = this.name  //записываем животное в локал сторэйдж(условно)
    }
}

const Cat = new Animal('Pushistor')

Cat.saveAnimal()

console.log(storage)

// Не верно, т.к. мы осуществляем два разных действия в одном классе, нарушая принцип
// ------------------------------------------------------------------------

//создаем класс, в котором получим имя животного
class GetAnimal {
    constructor(name) {
        this.name = name
    }

    getAnimalName() {
        return this.name
    }
}

//создаем класс, в котором будем сохранять в псевдо локал сторэйдж

class SaveAnimal {
    constructor(animal) {
        this.animal = animal
    }
    saveAnimal() {
        return storage.b = this.animal
    }
}



const Dog = new GetAnimal('Bobik')
const saver = new SaveAnimal(Dog.getAnimalName())
saver.saveAnimal()
console.log(storage)

//результат: {a: 'Pushistor', b: 'Bobik'}


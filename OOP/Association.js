// Ассоциации бывают двух видов : композиция и агрегация

class Transformer {
    constructor(leftGun, rightGun) {
        this.leftGun = leftGun
        this.rightGun = rightGun
    }

    fire (){
        this.rightGun.fire()
        this.leftGun.fire()
    }

    reload () {
        this.rightGun.reload()
        this.leftGun.reload()
    }
}

class Gun {
    constructor(ammo) {
        this.ammo = ammo
    }
    fire() {
        this.ammo -= 1
    }
    reload() {
        this.ammo = 10
    }
}

const leftGun = new Gun(10)
const rightGun = new Gun (10)

const Sanya = new Transformer(leftGun, rightGun)

Sanya.fire()
Sanya.fire()
Sanya.fire()
Sanya.fire()
Sanya.reload()

console.log(Sanya.leftGun.ammo)

//Это агрегация, т.к Пушки для Сани были созданы вне его класса и они могут быть переиспользованы в дальнейшем

//В случае композиции это бы происходило так:
/*
class Gun {
    constructor(ammo) {
        this.ammo = ammo
    }
    fire() {
        this.ammo -= 1
    }
    reload() {
        this.ammo = 10
    }
}

class Transformer {
    constructor() {
        this.leftGun = new Gun
        this.rightGun = new Gun создаем пушки прям в самом классе трансформера. Теперь их жизненный цикл связан.
        Можно объяснить отличие так: Если пушка создавалась внутри трансформера, 
        то она будет принадлежать конкетному будущему экземпляру трансформера. 
        Если появится условный Трансформер Гриша, который захочет взять себе пушку,
        которая была объявлена внутри класса композицией, то у него ничего не выйдет, потому что пушка была неотрывно сввзанна с Саней.
        В случае агрегации Гриша сможет подобрать пушку и продолжить использовать ее внутренее состояние.
    }

    fire (){
        this.rightGun.fire()
        this.leftGun.fire()
    }

    reload () {
        this.rightGun.reload()
        this.leftGun.reload()
    }
}
*/ 




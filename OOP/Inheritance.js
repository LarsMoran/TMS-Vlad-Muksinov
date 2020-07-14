// Наследование позволяет нам создавать прототипы классов, которые будут иметь общие свойства для всех потомков

class Transformer {
    canFire(){console.log(true)}
    canRun(){console.log(true)}
}

class Optimus extends Transformer {
    canSpeak(){console.log(true)}
}

class Bumblebee extends Transformer {
    canPlayMusicFragments(){console.log(true)}
}

const bumblebee = new Bumblebee
const optimus = new Optimus

optimus.canFire()
bumblebee.canFire()
optimus.canSpeak()
//bumblebee.canSpeak() Оба робота могут стрелять, но бамблби не может говорить

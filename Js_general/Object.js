const animal = {
    eats: true,
    isAnimal: true,
    isHuman: false
  };
  
  const rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  for (let key in rabbit) {
    if (!rabbit.hasOwnProperty(key)) continue;
    console.log( key + " = " + rabbit[key]);
  }

  console.log(Object.entries(animal))
  console.log(Object.keys(animal))
  console.log(Object.values(animal))

  const obj = Object.create({}, {
      name: {
          value: 'Alfred',
          enumerable: true,
          writable: true,
          configurable: true
      },

      role: {
          value: 'Dolphin',
          enumerable: false,
          writable: false,
          configurable: false
      },

      Info: {
        get() {
            console.log(`Hello! I'm ${this.name} the ${this.role}`)
        },
        set(val) {
            return this.name = val
        }
      }
  })
  obj.Info
  obj.Info = 'Sasha'
  obj.Info
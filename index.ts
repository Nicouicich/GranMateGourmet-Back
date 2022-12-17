export class Tatis {
  private nombre = 'luca'

    get Nombre() {
      return this.nombre
    }

      set Nombre (nombre) {
        this.nombre = nombre
      }
}

const luca = new Tatis()
console.log(luca.Nombre)
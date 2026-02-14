/*📝 Ejercicio 8: Clases Básicas
Problema: Crea una clase Calculadora con:

Propiedades privadas: resultado (number)
Constructor que inicialice resultado en 0
Métodos: sumar(num), restar(num), multiplicar(num), dividir(num), obtenerResultado()
Crea una instancia y realiza varias operaciones*/

class Calculadora {
  num1: number;
  num2: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  sumar(): number {
    return this.num1 + this.num2;
  }

  restar(): number {
    return this.num1 - this.num2;
  }

  dividir(): number {
    return this.num2 > 0 ? this.num1 / this.num2 : this.num2 / this.num1;
  }

  multiplicar() {
    return this.num1 * this.num2;
  }
}

const calculadora = new Calculadora(25, 3);
console.log(calculadora.sumar());
console.log(calculadora.restar());
console.log(calculadora.dividir());
console.log(calculadora.multiplicar());

/* ### 📝 Ejercicio 3: Arrays y Tipos

**Problema:** Crea un programa que maneje un array de números y realice las siguientes operaciones:

- Declara un array de números con al menos 5 elementos
- Calcula la suma de todos los elementos
- Encuentra el número mayor y el menor
- Muestra todos los resultados en consola */

let array: number[] = [2, 5, 15, 38, 99];
let salida: number;

const suma = (arr: number[]): number => {
  //let i: number = 0;
  let resultado: number = 0;

  for (let i = 0; i < arr.length; i++) {
    resultado += arr[i];
  }
  return resultado;
};

salida = suma(array);
console.log(`El resultado del vector es ${salida}`);

const mayormenor = (arr: number[]): string => {
  let menor: number = Math.min(...arr);
  let mayor: number = Math.max(...arr);
  return `El mayor número dentro del array es: ${mayor} y el menor es: ${menor}`;
};

console.log(mayormenor(array));

/*📝 Ejercicio 7: Tipos Union
Problema: Crea una función que pueda recibir un parámetro que puede ser string o number. La función debe:

Si recibe un string, retornar su longitud
Si recibe un number, retornar su valor al cuadrado
Probar la función con ambos tipos*/

const evaluarDato = (parametro: string | number): number => {
  let result =
    typeof parametro === "string"
      ? parametro.length
      : typeof parametro === "number"
      ? parametro * parametro
      : 0;
  return result;
};

console.log(`La longitud del string es ${evaluarDato("string")}`);
console.log(`El valor al cuadrado del numero es ${evaluarDato(5)}`);

/* ### 📝 Ejercicio 2: Funciones con Tipos

**Problema:** Crea una función que calcule el área de un rectángulo. La función debe:

- Recibir dos parámetros: `ancho` (number) y `alto` (number)
- Retornar el área calculada (number)
- Incluir validación para asegurar que los valores sean positivos
- Mostrar el resultado en consola */

const calcularArea=(ancho: number, alto: number): number=>{

    let resultado: number = 0;

    if (ancho > 0 && alto > 0) {
        resultado = ancho * alto;
    }
    return resultado;
}

let calculo: number = calcularArea(-1, 0);

calculo > 0 ? console.log(`El area es: ${calculo}`) : console.log(`Error 404`);





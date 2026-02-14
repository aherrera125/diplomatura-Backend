/*### 📝 Ejercicio 5: Funciones con Parámetros Opcionales

**Problema:** Crea una función `saludar` que reciba un `nombre` (string) y un `titulo` opcional (string). La función debe:

- Si se proporciona el título, mostrar: "Hola, [título] [nombre]"
- Si no se proporciona el título, mostrar: "Hola, [nombre]"
- Probar la función con y sin título*/

const saludar = (nombre?: string, titulo?: string): void => {
  titulo
    ? console.log(`Hola, ${titulo} ${nombre}`)
    : console.log(`Hola ${nombre}`);
};

let nombre: string = "Marcelo";
let titulo: string = "Doctor";

saludar(nombre, titulo);
saludar(nombre);

/* **Problema:** Crea una interfaz `Persona` con las propiedades: `nombre` (string), `edad` (number) y `email` (string). Luego:

- Crea un objeto que implemente esta interfaz
- Crea una función `mostrarValores` que reciba una `Persona` y muestre su información formateada
- Ejecuta la función con el objeto creado

- 🔥 ¿y si les pido que `mostrarValores` pueda recibir cualquier objeto y mostrar sus claves y valores? */

interface Persona{
    nombre: string;
    edad: number;
    email: string;
}

interface Persona2<T>{
    nombre: T;
    edad: T;
    email: T;
}

const persona: Persona = {
    nombre: "Sebastian",
    edad: 41,
    email: "pepe@gmail.com"
} 

const persona2: Persona2<string | number>= {
    nombre: "Alejandro",
    edad: 41,
    email: "jose@gmail.com"
} 

const mostrarValores=(persona: Persona, persona2: Persona2<string | number>): void => {
    console.log(`El nombre de la persona es ${persona.nombre}, tiene ${persona.edad} años y tiene declarado un email como ${persona.email}`);
    console.log(`El nombre de la persona es ${persona2.nombre}, tiene ${persona2.edad} años y tiene declarado un email como ${persona2.email}`);
}

mostrarValores(persona,persona2);
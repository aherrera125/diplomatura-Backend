/*📝 Ejercicio 6: Enums
Problema: Crea un enum DiaSemana con los días de la semana. Luego:

Crea una función que reciba un DiaSemana y retorne si es día laboral o fin de semana
Prueba la función con diferentes días
Muestra los resultados en consola*/

enum DiaSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miercoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sabado = "Sabado",
  Domingo = "Domingo",
}

const evaluarDia = (dia: DiaSemana): void => {
  dia != DiaSemana.Sabado && dia != DiaSemana.Domingo
    ? console.log(`El día ${dia} es dia laboral`)
    : console.log(`Es dia ${dia} fin de semana`);
};

const todosLosDias: DiaSemana[] = Object.values(DiaSemana) as DiaSemana[];
const diaRandom = todosLosDias[Math.floor(Math.random() * todosLosDias.length)];
evaluarDia(diaRandom);

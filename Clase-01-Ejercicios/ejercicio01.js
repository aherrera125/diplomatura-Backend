function calcularEstadisticaa(numeros) {
  // Validar que todos sean números
  if (!Array.isArray(numeros) || numeros.length === 0) {
    return { error: "Array inválido" };
  }

  //Cacular estadisticas
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  const promedio = suma / numeros.length;
  const maximo = Math.max(...numeros);
  const minimo = Math.min(...numeros);
  const pares = numeros.filter((num) => num % 2 === 0).length;
  const impares = numeros.length - pares;

  return {
    suma,
    promedio: Number(promedio.toFixed(2)),
    maximo,
    minimo,
    cantidad: numeros.length,
    pares,
    impares,
  };
}

//Uso
const numeros = [10, 20, 30, 40, 50, 15, 25, 35];
const estadisticas = calcularEstadisticaa(numeros);
console.log(estadisticas);

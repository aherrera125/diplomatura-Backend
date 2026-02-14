Ejercicio 0 - Crear base de datos
use curso_mongo_clase11

Ejercicio 1 - Insertar 5 autores y 12 libros con al menos 2 tags por libro.
db.authors.insertMany([
{
name: 'Gabriel García Márquez',
birthYear: 1927,
bio: 'Escritor colombiano de realismo mágico',
},
{
name: 'Isabel Allende',
birthYear: 1942,
bio: 'Escritora chilena del boom latinoamericano',
},
{
name: 'Haruki Murakami',
birthYear: 1949,
bio: 'Novelista japonés contemporáneo',
},
{
name: 'J. R. R. Tolkien',
birthYear: 1892,
bio: 'Autor británico, creador de la Tierra Media',
},
{
name: 'Jane Austen',
birthYear: 1775,
bio: 'Novelista inglesa del período romántico',
}
]);

db.books.insertMany([
// --- Gabriel García Márquez ---
{
title: 'Cien años de soledad',
pages: 471,
publishedAt: new Date('1967-05-30'),
tags: ['ficción', 'realismo mágico'],
authorId: ObjectId('REEMPLAZAR_ID_MARQUEZ'),
},
{
title: 'Crónica de una muerte anunciada',
pages: 122,
publishedAt: new Date('1981-01-01'),
tags: ['ficción', 'crimen'],
authorId: ObjectId('REEMPLAZAR_ID_MARQUEZ'),
},

// --- Isabel Allende ---
{
title: 'La casa de los espíritus',
pages: 433,
publishedAt: new Date('1982-01-01'),
tags: ['ficción', 'familia'],
authorId: ObjectId('REEMPLAZAR_ID_ALLENDE'),
},
{
title: 'Eva Luna',
pages: 368,
publishedAt: new Date('1987-01-01'),
tags: ['ficción', 'latinoamérica'],
authorId: ObjectId('REEMPLAZAR_ID_ALLENDE'),
},

// --- Haruki Murakami ---
{
title: 'Tokio Blues',
pages: 296,
publishedAt: new Date('1987-01-01'),
tags: ['drama', 'romance'],
authorId: ObjectId('REEMPLAZAR_ID_MURAKAMI'),
},
{
title: 'Kafka en la orilla',
pages: 505,
publishedAt: new Date('2002-01-01'),
tags: ['ficción', 'surrealismo'],
authorId: ObjectId('REEMPLAZAR_ID_MURAKAMI'),
},

// --- J. R. R. Tolkien ---
{
title: 'El hobbit',
pages: 310,
publishedAt: new Date('1937-09-21'),
tags: ['fantasía', 'aventura'],
authorId: ObjectId('REEMPLAZAR_ID_TOLKIEN'),
},
{
title: 'La comunidad del anillo',
pages: 423,
publishedAt: new Date('1954-07-29'),
tags: ['fantasía', 'épico'],
authorId: ObjectId('REEMPLAZAR_ID_TOLKIEN'),
},

// --- Jane Austen ---
{
title: 'Orgullo y prejuicio',
pages: 279,
publishedAt: new Date('1813-01-28'),
tags: ['romance', 'ficción histórica'],
authorId: ObjectId('REEMPLAZAR_ID_AUSTEN'),
},
{
title: 'Emma',
pages: 474,
publishedAt: new Date('1815-12-23'),
tags: ['romance', 'sociedad inglesa'],
authorId: ObjectId('REEMPLAZAR_ID_AUSTEN'),
},

// --- BONUS (2 libros extra, distintos autores) ---
{
title: 'El amor en los tiempos del cólera',
pages: 348,
publishedAt: new Date('1985-01-01'),
tags: ['amor', 'ficción'],
authorId: ObjectId('REEMPLAZAR_ID_MARQUEZ'),
},
{
title: 'De amor y de sombra',
pages: 384,
publishedAt: new Date('1984-01-01'),
tags: ['romance', 'ficción política'],
authorId: ObjectId('REEMPLAZAR_ID_ALLENDE'),
}
]);

Ejercicio 2 - Obtener los 5 libros con más páginas mostrando title, pages y ocultando \_id.
db.books.find({},{title:1,pages:1,\_id:0}).sort({pages:-1}).limit(5);

Ejercicio 3 - Listar libros publicados entre 1970 y 1990 (inclusive) ordenados por publishedAt asc.
db.books.find({
publishedAt: {
$gte: new Date("1950-01-01"),
$lte: new Date("1970-12-31")
}
}).sort({publishedAt:-1});

Ejercicio 4 - Agregar el campo classic: true a libros con publishedAt < 1975.
db.books.updateMany({publishedAt:{$lt:new Date("1975-01-01")}},{$set:{classic:true}});

Ejercicio 5 - Subir 50 páginas a todos los libros con tag fantasía.
db.books.updateMany(
{ tags: "fantasía" },
{ $inc: { pages: 50 } }
);

Ejercicio 6 - Borrar libros con menos de 150 páginas y verificar cuántos fueron eliminados.
db.books.deleteMany({ pages: { $lt: 150 } });

Ejercicio 7 -Buscar libros cuyo título contenga "amor" o "soledad", ignorando mayúsculas.
db.books.find({$or:[{title: /amor/i},{title:/soledad/i}],});

Ejercicio 8 - Traer solo libros con exactamente 2 tags y proyectar title y tags.
db.books.find({tags:{$size:2}},{title:1, tags:1});

Ejercicio 9 - Crear un índice compuesto { authorId: 1, pages: -1 } y correr una consulta que lo use.

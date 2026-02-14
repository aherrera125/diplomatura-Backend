-- 1. Consulta todos los registros de una tabla:
SELECT * from autores au
order by au.apellido;

-- 2. Consulta con filtro WHERE:
SELECT * from libros li where li.anio_publicacion > 1980;

-- 3. Consulta con múltiples condiciones:
select * from usuarios us where us.activo = 1 and us.fecha_registro BETWEEN '2024-02-01' and  '2024-02-28';

-- 4. Consulta con ORDER BY y LIMIT:
select * from libros li order by li.precio DESC LIMIT 3;

-- 5. Consulta con funciones de agregación:
select avg(precio) precio_promedio from libros;

-- 6. Consulta con COUNT y GROUP BY:
select au.apellido, au.nombre, COUNT(li.id) cant_libros from autores au
inner join libros li on au.id = li.autor_id
group by au.id, au.apellido, au.nombre;

-- 7. Consulta con LIKE para búsqueda de texto:
select * from libros li 
where li.titulo like '%amor%' OR li.titulo like '%ciudad%';

-- 8. Consulta con BETWEEN:
select * from prestamos pre
where pre.fecha_prestamo BETWEEN '2024-03-01' and '2024-03-10';

-- 9. Consulta con funciones de fecha:
SELECT *, DATEDIFF(NOW(), pre.fecha_prestamo) AS cant_dias from prestamos pre
where pre.estado = 'activo';

-- 10. Consulta con DISTINCT:
SELECT DISTINCT nacionalidad
FROM autores
WHERE nacionalidad IS NOT NULL;
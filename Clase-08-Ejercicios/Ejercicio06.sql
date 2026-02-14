-- 📋 Ejercicio 6: Consultas con JOIN
-- 1. INNER JOIN básico:
select concat(au.apellido, ' ', au.nombre) Completo, ed.nombre from libros li
inner JOIN autores au on li.autor_id = au.id
inner join editoriales ed on li.editorial_id = ed.id;

-- 2. LEFT JOIN para incluir todos los registros:
select concat(au.apellido, ' ', au.nombre) Completo, COUNT(li.id) cant_libros from autores au
left join libros li on au.id=li.autor_id 
group by au.id;

-- 3. JOIN con condiciones adicionales:
select us.apellido, us.nombre, pre.fecha_prestamo, li.titulo from prestamos pre
inner join usuarios us on pre.usuario_id = us.id
inner JOIN libros li on pre.libro_id = li.id
where pre.estado = 'activo';

-- 4. Múltiples JOINs con filtros:
select 
	pre.fecha_prestamo, 
    pre.estado,
    concat(us.apellido, ' ', us.nombre) nombre_usuario,
    li.titulo,
    concat(au.apellido, ' ', au.nombre) nombre_autor,
    ed.nombre nombre_editorial
from prestamos pre
inner join usuarios us on pre.usuario_id = us.id
inner join libros li on pre.libro_id = li.id
inner join autores au on li.autor_id = au.id
inner join editoriales ed on li.editorial_id = ed.id
where pre.estado = 'devuelto';

-- 5. JOIN con funciones de agregación:
select concat(us.apellido, '', us.nombre) Nombre, COUNT(pre.id) cant_prestamo from usuarios us
inner join prestamos pre on us.id = pre.usuario_id
GROUP by pre.usuario_id, us.apellido, us.nombre
-- 📋 Ejercicio 3: Actualización de Datos

-- 1. Actualiza el estado de un préstamo específico:
SELECT pre.id prestamoId,
	pre.fecha_prestamo,
    pre.fecha_devolucion_esperada,
    pre.fecha_devolucion_real,
	us.id usuarioId,
    us.apellido, 
    us.nombre, 
    li.id libroId, 
    li.titulo, 
    pre.estado 
from prestamos pre 
inner join usuarios us on pre.usuario_id = us.id
inner join libros li on pre.libro_id = li.id
where us.id = 1 and li.titulo="Cien años de soledad";

update prestamos
set fecha_devolucion_real = NOW(),
	estado = "Devuelto"
where id = 1;

-- 2. Actualiza el precio de un libro específico:
Select * from libros where id = 5;

update libros
set precio = 24.50
WHERE id = 5;

-- 3. Actualiza la información de un usuario:
update usuarios 
set telefono = "555-9999",
	activo = true
where id = 4;

SELECT * from usuarios

-- 4. Actualiza múltiples registros con una condición:

ALTER TABLE prestamos ADD COLUMN multa INT NOT NULL DEFAULT 0;

select * from prestamos where estado = "vencido";

UPDATE prestamos
set estado = "devuelto",
	multa = 5,
    fecha_devolucion_real=now()
where id = 4;

select * from prestamos where id = 4;

-- 4. Actualiza la biografía de un autor:
select * from autores;

update autores
set biografia = "Escritor, novelista, cuentista, guionista y periodista colombiano. Ganador del Premio Nobel de Literatura en 1982"
where id = 1

-- 🔍 Verificación
-- 1. El préstamo con id = 1 tiene fecha_devolucion_real y estado = 'devuelto'
select 
	pre.fecha_devolucion_real, 
    pre.estado from prestamos pre
where id = 1

-- 2. El libro "Rayuela" tiene precio actualizado a 24.50
select li.precio from libros li
where li.titulo = "Rayuela"

-- 3. El usuario Luis Fernández tiene teléfono actualizado y está activo
select us.telefono, us.activo from usuarios us
where us.apellido = "Fernandez" and us.nombre= "Luis"

-- 4. El préstamo vencido fue actualizado correctamente
select 
	pre.fecha_devolucion_real, 
    pre.estado, 
    pre.multa 
from prestamos pre
where id = 4

-- 5. La biografía de García Márquez incluye la información del Nobel
select au.biografia from autores au
where au.apellido="Garcia Marquez"
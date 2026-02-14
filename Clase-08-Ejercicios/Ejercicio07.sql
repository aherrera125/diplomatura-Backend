-- 📋 Ejercicio 7: Eliminación de Datos y Problemas de Integridad Referencial

-- 1. Intenta eliminar un autor que tiene libros asociados:
delete from prestamos where id in(1,3)

DELETE FROM libros WHERE autor_id = 1;
DELETE FROM autores WHERE id = 1;
DELETE FROM autores WHERE id = 1;
-- 📋 Ejercicio 4: Modificación de Estructura con ALTER TABLE
-- 1. Agrega un campo nuevo a la tabla libros:
alter table prestamos 
add COLUMN disponible boolean default true

-- 2. Agrega un campo de multa a la tabla prestamos:
ALTER TABLE prestamos 
ADD COLUMN multa DECIMAL(10,2) NOT NULL DEFAULT 0.00;

-- 3. Modifica el tipo de dato de un campo existente:
alter table usuarios
MODIFY telefono VARCHAR(30)

-- 4. Agrega una restricción UNIQUE:
ALTER TABLE usuarios
ADD UNIQUE (email);

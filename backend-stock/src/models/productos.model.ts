import pool from "../database/mysql";
import { RowDataPacket } from "mysql2";
import { IProducto, Producto, UpdateProductoDTO } from "../types/IProducto";

export type ProductoRow = IProducto & RowDataPacket;

export const findAllProducts = async (): Promise<IProducto | null> => {
  const [rows] = await pool.query<ProductoRow[]>("Select * from PRODUCTOS");
  return rows.length ? rows[0] : null;
};

export const findProduct = async (
  id: number,
  name: string = "",
): Promise<IProducto | null> => {
  const [rows] = await pool.query<ProductoRow[]>(
    "SELECT * FROM PRODUCTO p WHERE p.id = ? OR p.name = ?",
    [id, name],
  );
  return rows.length ? rows[0] : null;
};

export const createProduct = async (
  product: Omit<Producto, "id">,
): Promise<number> => {
  const [productResult] = await pool.query(
    "INSERT INTO PRODUCTO (nombre, stock, descripcion, precio) VALUES (?, ?, ?,?)",
    [product.nombre, product.stock, product.descripcion, product.precio],
  );
  return (productResult as any).insertId;
};

export const updateProduct = async (
  product: UpdateProductoDTO,
): Promise<IProducto | null> => {
  const [rows] = await pool.query<ProductoRow[]>(
    "update PRODUCTO as p set nombre = ?, descripcion=?, precio = ? where p.id = ?",
    [product.nombre, product.descripcion, product.precio, product.id],
  );

  return rows.length ? rows[0] : null;
};

export const deleteProduct = async (id: number): Promise<Producto | null> => {
  const [rows] = await pool.query<ProductoRow[]>(
    "delete from PRODUCTO where id = ?",
    [id],
  );

  return rows.length ? rows[0] : null;
};

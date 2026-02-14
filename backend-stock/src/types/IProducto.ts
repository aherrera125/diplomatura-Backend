export interface Producto {
  nombre: string;
  stock: number;
  descripcion: string;
  precio: number;
}

export interface IProducto extends Producto {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductoDTO {
  nombre: string;
  stock?: number;
  descripcion: string;
  precio: number;
}

export interface UpdateProductoDTO {
  id: number;
  nombre?: string;
  stock?: number;
  descripcion?: string;
  precio?: number;
}

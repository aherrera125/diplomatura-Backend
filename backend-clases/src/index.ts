// Importamos Express y los tipos Request y Response desde express
// Esto nos permite tipar correctamente los parámetros de las rutas
import express, { Request, Response } from "express";
import path from "path";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.routes";
import usersRouter from "./routes/users.routes";

// Creamos la instancia principal de la aplicación Express
const app = express();

// Definimos el puerto donde va a escuchar el servidor
const PORT = 3000;

// Configuración del motor de plantillas Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Middleware que permite leer JSON en el body de las requests
app.use(express.json());

//Aqui los archivos publicos tienen mas prioridad que handlebars porque estan primeros

// Middleware para servir archivos estáticos
// __dirname representa la carpeta actual compilada
app.use(express.static(path.join(__dirname, "..", "public"))); //<---- archivos publicos

// Endpoint GET raíz
// URL: http://localhost:3000/
app.get("/", (req: Request, res: Response) => {
  // Respondemos con un objeto JSON simple
  res.json({ message: "Servidor funcionando 🚀" });
});

// Endpoint GET /saludo
// URL: http://localhost:3000/saludo
app.get("/saludo", (req: Request, res: Response) => {
  res.json({ saludo: "Hola desde Node.js + Express + TypeScript" });
});

// Endpoint GET /ping
// URL: http://localhost:3000/ping
app.get("/ping", (req: Request, res: Response) => {
  res.json({ pong: true });
});

// Endpoint GET /usuario
// URL: http://localhost:3000/usuario
app.get("/api/usuario", (req: Request, res: Response) => {
  res.json({
    nombre: "Alejandro",
    apellido: "Herrera",
    edad: "41 años",
    residencia: "Tucumán, Argentina",
  });
});

// Endpoint GET /info
// URL: http://localhost:3000/info
app.get("/api/info", (req: Request, res: Response) => {
  res.json({ info: "Por aqui envio la informacion" });
});

// Rutas de vistas
app.use("/handlebars", viewsRouter); //<---- handlebars

app.use("/api/users", usersRouter);

// Iniciamos el servidor HTTP
// Si todo está correcto, veremos el mensaje en consola
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

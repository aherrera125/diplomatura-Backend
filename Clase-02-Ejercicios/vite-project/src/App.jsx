import { useState } from "react";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [filtro, setFiltro] = useState("todas");

  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([
        ...tareas,
        {
          id: Date.now(),
          texto: nuevaTarea,
          completada: false,
        },
      ]);
      setNuevaTarea("");
    }
  };

  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "completadas") return tarea.completada;
    if (filtro === "pendientes") return !tarea.completada;
    return true;
  });

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>

      <div className="agregar-tarea">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && agregarTarea()}
          placeholder="Nueva tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <div className="filtros">
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
        <button onClick={() => setFiltro("completadas")}>Completadas</button>
      </div>

      <ul>
        {tareasFiltradas.map((tarea) => (
          <li key={tarea.id} className={tarea.completada ? "completada" : ""}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => toggleCompletada(tarea.id)}
            />
            <span>{tarea.texto}</span>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <p>
        Total: {tareas.length} | Completadas:{" "}
        {tareas.filter((t) => t.completada).length}
      </p>
    </div>
  );
}

export default App;

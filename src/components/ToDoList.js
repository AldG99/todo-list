import React, { useState } from 'react';
import ToDoItem from './ToDoItem'; // Importa el componente ToDoItem

const ToDoList = () => {
  // Define el estado para las tareas y el nuevo texto de la tarea
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Maneja el cambio en el campo de entrada de texto
  const handleChange = (event) => {
    setNewTask(event.target.value); // Actualiza el estado del nuevo texto de la tarea
  };

  // Maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (newTask.trim() !== '') { // Verifica que la nueva tarea no esté vacía
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]); // Agrega la nueva tarea al estado de las tareas
      setNewTask(''); // Limpia el campo de entrada de texto
    }
  };

  // Maneja la eliminación de una tarea
  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId)); // Filtra y elimina la tarea por su ID
  };

  // Maneja el cambio de estado de completado de una tarea
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )); // Alterna el estado de completado de la tarea
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada de texto para una nueva tarea */}
        <input type="text" value={newTask} onChange={handleChange} />
        {/* Botón para agregar la tarea */}
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {/* Mapea sobre las tareas y renderiza un ToDoItem para cada una */}
        {tasks.map(task => (
          <ToDoItem
            key={task.id} // Clave única para cada elemento
            task={task} // Pasar la tarea como props
            onDelete={handleDelete} // Pasar la función de eliminar como props
            onToggleComplete={handleToggleComplete} // Pasar la función de alternar completado como props
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

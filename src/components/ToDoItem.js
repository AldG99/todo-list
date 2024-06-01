import React from 'react';

// Componente ToDoItem que recibe task, onDelete y onToggleComplete como props
const ToDoItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <li>
      {/* Checkbox para marcar o desmarcar la tarea como completada */}
      <input
        type="checkbox"
        checked={task.completed} // El estado del checkbox refleja si la tarea está completada
        onChange={() => onToggleComplete(task.id)} // Llama a la función onToggleComplete pasando el id de la tarea
      />
      {/* Texto de la tarea, con estilo que refleja si está completada */}
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text} // Texto de la tarea
      </span>
      {/* Botón para eliminar la tarea */}
      <button onClick={() => onDelete(task.id)}>Delete</button> // Llama a la función onDelete pasando el id de la tarea
    </li>
  );
};

export default ToDoItem;

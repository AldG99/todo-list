import React from 'react'; // Importa React para utilizar JSX y componentes
import ToDoList from './components/ToDoList'; // Importa el componente ToDoList
import './styles/App.scss'; // Importa los estilos de la aplicación

// Componente principal de la aplicación
function App() {
  return (
    <div className="App">
      <ToDoList /> {/* Renderiza el componente ToDoList */}
    </div>
  );
}

export default App; // Exporta el componente App como el componente principal de la aplicación

import React from 'react';
import ToDoList from './ToDoList';

const App = () => {
  const tasks = ['Fazer compras', 'Estudar React', 'Lavar o carro'];

  return (
    <div>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;

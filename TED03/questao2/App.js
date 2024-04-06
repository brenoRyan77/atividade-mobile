import React from 'react';
import Header from './Header';

const App = () => {
  const handleButtonClick = () => {
    alert('Botão de Ação pressionado!');
  };

  return (
    <div>
      <Header title="Meu Cabeçalho" onPress={handleButtonClick} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Home from './Home';
import CadastroProduto from './CadastroProduto';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  }

  return (
    <div>
      {currentPage === 'home' && <Home />}
      {currentPage === 'cadastro' && <CadastroProduto />}
      <button onClick={() => handleButtonClick('home')}>HOME</button>
      <button onClick={() => handleButtonClick('cadastro')}>CADASTRO</button>
      <button onClick={() => handleButtonClick('perfil')}>PERFIL</button>
    </div>
  );
}

export default App;

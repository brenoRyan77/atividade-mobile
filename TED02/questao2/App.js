import React, { useState } from 'react';
import Home from './Home';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  }

  return (
    <div>
      {currentPage === 'home' && <Home />}
      <button onClick={() => handleButtonClick('cadastro')}>CADASTRO</button>
      <button onClick={() => handleButtonClick('perfil')}>PERFIL</button>
    </div>
  );
}

export default App;

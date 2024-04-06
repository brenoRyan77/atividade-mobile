import React from 'react';

const Header = ({ title, onPress }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onPress}>Botão de Ação</button>
    </div>
  );
}

export default Header;

import React from 'react';
import { useTheme } from './TemaContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#ffffff' : '#333333', color: theme === 'light' ? '#333333' : '#ffffff', padding: '20px', textAlign: 'center' }}>
      <h2>Componente com Tema</h2>
      <p>O tema atual é: {theme}</p>
      <button onClick={toggleTheme}>Alternar Tema</button>
    </div>
  );
};

export default ThemedComponent;

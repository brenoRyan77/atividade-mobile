import React from 'react';
import { ThemeProvider } from './TemaContext';
import TemaComponente from './TemaComponente';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <p></p>
        <TemaComponente />
      </div>
    </ThemeProvider>
  );
};

export default App;

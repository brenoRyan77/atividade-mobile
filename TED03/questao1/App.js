import React from 'react';
import ProductCard from './ProductCard';

const App = () => {
  return (
    <div>
      <h1>Produtos</h1>
      <ProductCard nome="Produto A" preco="R$ 100,00" />
      <ProductCard nome="Produto B" preco="R$ 150,00" />
      <ProductCard nome="Produto C" preco="R$ 80,00" />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const CadastroProduto = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do produto:', { nome, preco, descricao });
    setNome('');
    setPreco('');
    setDescricao('');
  }

  return (
    <div>
      <h1>Cadastro de Produto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Preço:
          <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} />
        </label>
        <br />
        <label>
          Descrição:
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroProduto;

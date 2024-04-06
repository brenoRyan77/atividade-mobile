import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { nome, preco } = this.props;

    return (
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <p><strong>{nome}</strong></p>
        <p><em>{preco}</em></p>
      </div>
    );
  }
}

export default ProductCard;

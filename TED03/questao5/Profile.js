import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="caminho/para/a/foto-de-perfil.jpg" alt="Foto de Perfil" style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px' }} />
        <div>
          <h2 style={{ marginBottom: '10px' }}>Nome do Usuário</h2>
          <p style={{ marginBottom: '5px' }}>E-mail: usuario@email.com</p>
          <p>Telefone: (00) 12345-6789</p>
        </div>
      </div>
    );
  }
}

export default Profile;

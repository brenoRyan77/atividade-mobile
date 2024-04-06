import React from 'react';

const Button = ({ title, color }) => {
  const handleClick = () => {
    alert(`Botão "${title}" pressionado!`);
  };

  return (
    <button style={{ backgroundColor: color, color: 'white', padding: '5px 10px', borderRadius: '5px' }} onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;

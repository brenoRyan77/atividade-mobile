
import React, { useState } from "react";


const Digitado = () => {
  const [digitado, ConfigDigitado] = useState('');


  return (
    <div>
      <p></p>
      <input type="text" value={digitado} onChange={(e) => ConfigDigitado(e.target.value)} placeholder="Digite algo">
      </input>
      <p>O valor digitado foi <b>{digitado}</b></p>
    </div>
  )
};

export default Digitado


import React, { useState } from "react";


const Contador = () => {
  const [contar, ConfigContador] = useState(0);


  return (
    <div>
      <p>Contador: {contar}</p>
      <button onClick={() => ConfigContador(contar + 1)}>Incrementar</button>
      <button onClick={() => ConfigContador(contar - 1)}>Decrementar</button>
    </div>
  )
};

export default Contador

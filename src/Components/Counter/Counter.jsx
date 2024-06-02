import React, { useState } from "react";

const Counter = () => {
  const [cantidad, setCantidad] = useState(0);

  const contar = () => {
    setCantidad(cantidad + 1);
  };
  return (
    <div>
      <button onClick={contar}>Contar</button>
      <h2>Tengo {cantidad}</h2>
    </div>
  );
};

export default Counter;

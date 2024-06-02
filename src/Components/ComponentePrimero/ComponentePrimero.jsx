import React, { useState } from "react";
import "./componentePrimero.css";

const ComponentePrimero = () => {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleClick = () => {
    if (usuario === "Gaston" && pass === "1234") {
      setMensaje(`Bienvenido ` + usuario);
    } else {
      setMensaje("Datos incorrectas.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "usuario") {
      setUsuario(value);
    } else if (name === "pass") {
      setPass(value);
    }
  };

  return (
    <div className="container">
      <h1>Hola: {usuario}</h1>
      <label htmlFor="usuario">Usuario:</label>
      <input type="text" name="usuario" id="usuario" onChange={handleChange} />
      <br />
      <label htmlFor="pass">Contraseña:</label>
      <input type="password" name="pass" id="pass" onChange={handleChange} />
      <br />
      <button onClick={handleClick}>Ingresar</button>
      <h2>{mensaje}</h2>
    </div>
  );
};

export default ComponentePrimero;

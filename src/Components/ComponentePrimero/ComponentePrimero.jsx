import React, { useState } from "react";
import "./componentePrimero.css";

const LoginComponent = () => {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleClick = () => {
    if (usuario === "Gaston" && pass === "1234") {
      setMensaje(`Bienvenido `);
    } else {
      setMensaje("Credenciales incorrectas.");
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
      <h1>Hola: {usuario} </h1>
      <label htmlFor="usuario">Usuario:</label>
      <input type="text" name="usuario" id="usuario" onChange={handleChange} />
      <br />
      <label htmlFor="pass">Contraseña:</label>
      <input type="password" name="pass" id="pass" onChange={handleChange} />
      <br />
      <button onClick={handleClick}>Ingresar</button>
      <p>{mensaje}</p>
    </div>
  );
};

export default LoginComponent;

import React from "react";

const Card = ({user}) => {

  const ocultarPassword = (password) => {
    return password.split('').map(() => '*').join('');
  }

  return(
    <div className="card">
      <h1 style={{ color: 'black' }}>Usuario registrado</h1>

      <br/>
      <h3 style={{ color: 'black',  }}>Datos ingresados:</h3>
      <p style={{ fontWeight: 'bold' ,letterSpacing: '2px'}}>Nombre: {user.name}</p>
      <p style={{ fontWeight: 'bold' ,letterSpacing: '2px'}}>Contraseña: {ocultarPassword(user.password)}</p>
      <p style={{ fontWeight: 'bold',letterSpacing: '2px' }}>Edad: {user.age}</p>
    </div>
  );

};

export default Card;

import React from 'react'
import '../App.css'

const Formulario = ({handleClick, setUser}) => {
  return (
    <form onSubmit={handleClick} className='formulario'>
        <input type='text' placeholder='Ingrese tu nombre' onChange={(e) => setUser((prev) => ({...prev, name: e.target.value}))} ></input>
        <input type='password' placeholder='Ingrese su contraseña' onChange={(e) => setUser((prev) => ({...prev, password: e.target.value}))}></input>
        <input type='number' placeholder='Ingrese su edad' onChange={(e) => setUser((prev) => ({...prev, age: e.target.value}))}></input>
        <button>Enviar</button>
    
      </form>
  )
}

export default Formulario
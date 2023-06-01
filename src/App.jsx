import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Formulario from './Components/Formulario';

function App() {

  const [user, setUser] = useState({
    name: '',
    password: '',
    age: 0
  })

  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);
  
  const handleClick = (e) => {
    
    e.preventDefault();

    if (user.name.trim() === '' || user.password.trim() === '' || user.age === 0) {
      setError('Por favor completa todos los campos');
      setShowCard(false); 
      return;
    }

    if (user.name.length < 3) {
      setError('El nombre debe tener al menos 3 caracteres');
      setShowCard(false);
      return;
    }

    if (user.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setShowCard(false);
      return;
    }

    if (user.age < 18) {
      setError('Debe ser mayor de edad');
      setShowCard(false);
      return;
    }
    
    setError('');
    setShowCard(true);
    
  }

  return (
    <div >
      <h1 className='h1Formulario'>Registrar usuario</h1>
      <Formulario setUser={setUser} handleClick={handleClick}/>
      {error && <p className="error">{error}</p>}
      {showCard && <Card user={user} />}

    </div>
  )
}

export default App

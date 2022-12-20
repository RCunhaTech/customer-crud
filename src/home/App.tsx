import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.css'

function App() {

  type Customer = {
    name:string
  }

  const [customers, setCustomers] = useState<Customer[]>([])

  return (
    <div className="App">
      <h2>Registro de Clientes</h2>
      <input 
        type="text" 
        placeholder="digite o nome">
      </input>

      <button>Adicionar</button>
    </div>
  )
}

export default App

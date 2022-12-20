import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { CustomerList } from '../components/customer-list'
import './App.css'

function App() {

  type Customer = {
    name:string
  }

  const [customers, setCustomers] = useState<Customer[]>([{
    name:'Roberto'
  }])

  return (
    <>
      <div className="App">
        <h2>Registro de Clientes</h2>
        <input 
          type="text" 
          placeholder="digite o nome">
        </input>
        <button>Adicionar</button>
      </div>
      <CustomerList name="Roberto" />
    </>
  )
}

export default App

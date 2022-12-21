import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { CustomerList } from '../components/customerList/customer-list'
import { Header } from '../components/header/header'
import './App.css'

function App() {

  type Customer = {
    name?:string,
    time?:string
  }

  const [customerName,setCustomername] =useState<Customer>({})
  const [customers, setCustomers] = useState<Customer[]>([])

  function handlerAddCustomer() {
    const customer:Customer = {
      name:customerName.name,
      time: new Date().toLocaleTimeString('pt-br',{
        hour:'2-digit',minute:'2-digit',second:'2-digit'
      })
    } 
    setCustomers(preData => [...preData,customer])
  }

  return (
    <div className="container">
      <Header title="Cadastro de Clientes" logo={reactLogo} />
      <input type="text" placeholder="digite o nome" onChange={e => setCustomername({name:e.target.value})}></input>
      <button onClick={handlerAddCustomer}>Adicionar</button>
      {
        customers.map(customer => <CustomerList key={customer.time} name={customer.name} time={customer.time}/>)
      }
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import { v4  as uuidv4 } from 'uuid';

import { Filter, Form, ListedPhone} from './components'

import services from  './services/phone-book-services'

function App() {
  const [input, setInput] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    services.getPersons()
    .then(response => setData(response))
  }, [])


  const handleFilter = (e) => {
    setInput(e.target.value)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleNumber = (e) => {
    setNumber(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    setNumber('')
    
  }
  const handleDelete = () => {
    console.log('testing delete');

    services.addLostItem()
  }

  return (
    <>
      <h1>PHONE BOOK</h1>
      <Filter value={input} logic={handleFilter}/> 
      <Form valueName={name} valueNumber={number} onName={handleName} onNumber={handleNumber} onSubmit={handleSubmit}/>
      <h2>Phone List:</h2>
      {data && data.map((phone) => (
          <ListedPhone key={phone.id} person={phone} deletePerson={handleDelete}/>
      ))}
    </>
  )
}

export default App

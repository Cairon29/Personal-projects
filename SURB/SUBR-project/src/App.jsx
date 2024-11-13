import { useState, useEffect } from 'react'
import { v4  as uuidv4 } from 'uuid';

import { SearchInput, Form, LostItem } from './components'
import services from './services/dbServices'


function App() {
  const [lostItems, setLostItems] =  useState([])
  const [search, setSearch] =  useState('')

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [foundIn, setFoundIn] = useState('')
  const [showAll, setShowAll] = useState([])

  
  useEffect(() => {
    services.getLostItems()
    .then(data => setLostItems(data))
  }, [])
  
  /* SEARCH */

  const handleInputSearch = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
    
  }

  /* FORM SETTINGS */
  const handleFormName = (e) => {
    setName(e.target.value)
  }
  const handleFormDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleFormDate = (e) => {
    setDate(e.target.value)
  }

  const handleFormFoundIn = (e) => {
    setFoundIn(e.target.value)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(name, description, date, foundIn)

    const newLostItem = {
      Id_Objeto: uuidv4(),
      Id_Dueño: uuidv4(),
      Id_Encontrado: uuidv4(),
      Nombre_Objeto: name,
      Descripcion:  description,
      Lugar_Perdido: foundIn,
      Fecha_Perdido: date,
      Id_Estado: uuidv4(),
      Id_Categoria: uuidv4(),
      estado: false
    }
    services.addLostItem(newLostItem)
    .then(returnedItem => {
      setLostItems(lostItems.concat(returnedItem))
      setFoundIn('')
      setDescription('')
      setName('')
      setDate('')
    })
  }

  const handleDeleteLostItem = (/* id */) => {
    // services.deleteLostItem(id)
    // .then(response => console.log(response));
    // setLostItems(lostItems.map((item) => item.Id_Objeto !== id))
    console.log('Trying to delete');
  }

  

  return (
    <>
      <SearchInput search={search} handleSearch={handleInputSearch}/>
      <section>
        <h2>Items perdidos</h2>
        <section id='lostItems'>
        {
          !lostItems 
          ? <p>No hay items perdidos</p>
          : lostItems.map((item) => (
            <LostItem key={item.Id_Objeto} lostItem={item} handleFound={handleDeleteLostItem}/>
          ))
        }
        </section>
      </section>
      <Form 
          name={name} handleName={handleFormName}
          description={description} handleDescription={handleFormDescription}
          date={date} handleDate={handleFormDate}
          foundIn={foundIn} handleFoundIn={handleFormFoundIn}
          handleSubmit={handleFormSubmit}
      />
    </>
  )
}

export default App

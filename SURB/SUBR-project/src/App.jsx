import { useState, useEffect } from 'react'
import { v4  as uuidv4 } from 'uuid';
import { SearchInput, Form, LostItem } from './components'
import services from './services/dbServices'

function App() {

  const [lostItems, setLostItems] =  useState([])
  const [search, setSearch] =  useState('')
  const [formObject, setFormObject] = useState({
    id: '',
    object: '',
    description: '',
    dateLost: '',
    dateFound: '',
    foundIn: '',
    foundBy: '',
    state: false
  })
  
  useEffect(() => {
    services.getLostItems()
    .then(data => setLostItems(data))
  }, [])

  const handleInputs = {
    handleObjectName: (e) => {
      console.log(e.target.value);
      setFormObject({...formObject, object: e.target.value})
    },
    handleDescription: (e) => {
      console.log(e.target.value);
      setFormObject({...formObject, description: e.target.value})
    },
    handleDateLost: (e) => {
      console.log(e.target.value);
      setFormObject({...formObject, dateLost: e.target.value})
    },
    handleFoundIn: (e) => {
      console.log(e.target.value);
      setFormObject({...formObject, foundIn: e.target.value})
    },
    handleFoundBy: (e) => {
      console.log(e.target.value);
      setFormObject({...formObject, foundBy: e.target.value})
    }
  }
   
  /* PENDING */
  const handleInputSearch = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  /* PENDING */
  const handleFormSubmit = (e) => {
    e.preventDefault()

    const newLostItem = {...formObject, id: uuidv4()}
    services.addLostItem(newLostItem)
    .then(returnedItem => {
      setLostItems(lostItems.concat(returnedItem))
      setFormObject({...formObject, object: ''})
      setFormObject({...formObject, description: ''})
      setFormObject({...formObject, dateLost: ''})
      setFormObject({...formObject, foundIn: ''})
      setFormObject({...formObject, foundBy: ''})
    })
  }

  /* PENDING */
  const handleDeleteLostItem = (/* id */) => {
    // services.deleteLostItem(id)
    // .then(response => console.log(response));
    // setLostItems(lostItems.map((item) => item.Id_Objeto !== id))
    console.log('Trying to delete');
  }

  return (
    <>
      <SearchInput search={search} handleSearch={handleInputSearch}/>
      <section className="lostItem-container">
        <h2>Items perdidos</h2>
        <section id='lostItems'>
        {
          !lostItems 
          ? <p>No hay items perdidos</p>
          : lostItems.map((item) => (
            <LostItem key={item.id} lostItem={item} handleFound={handleDeleteLostItem}/>
          ))
        }
        </section>
      </section>
      <Form
        lostItemObject={formObject}
        hdlInputObject={handleInputs}
        handleSubmit={handleFormSubmit}
      />
    </>
  )
}

export default App
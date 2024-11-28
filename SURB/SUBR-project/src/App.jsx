import { useState, useEffect, useContext } from 'react'
import { v4  as uuidv4 } from 'uuid';
import { SearchInput, Form, LostItem, ClicksMade } from './components'
import services from './services/dbServices'
import { globalClicks } from './context/ClicksContext';

function App() {
  const { incrementClicks } = useContext(globalClicks)

  const [lostItems, setLostItems] = useState([])
  const [search, setSearch] = useState('')
  const [filteredItems, setFilteredItems] = useState([])
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
    .catch(err => console.error("Error fetching lost items:", err));
  }, [])

  const handleInputs = {
    handleObjectName: (e) => setFormObject({...formObject, object: e.target.value}),
    handleDescription: (e) => setFormObject({...formObject, description: e.target.value}),
    handleDateLost: (e) => setFormObject({...formObject, dateLost: e.target.value}),
    handleFoundIn: (e) => setFormObject({...formObject, foundIn: e.target.value}),
    handleFoundBy: (e) => setFormObject({...formObject, foundBy: e.target.value})
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (formObject.object && formObject.description && formObject.dateLost) {
      const newLostItem = {...formObject, id: uuidv4()}
      services.addLostItem(newLostItem)
      .then((returnedItem) => {
        incrementClicks();
        setLostItems(lostItems.concat(returnedItem))
        setFormObject({
          id: '',
          object: '',
          description: '',
          dateLost: '',
          dateFound: '',
          foundIn: '',
          foundBy: '',
          state: false
        });
      })
    } else {
      alert("Please fill all fields")
    }
  }
  const handleDeleteLostItem = (id) => {
    services.deleteLostItem(id)
    .then(() => {
      setLostItems(lostItems.filter((item) => item.id !== id))
      incrementClicks();
    })
    .catch(err => console.error("Error deleting item:", err));
  }
  /* PENDING */
  const handleInputSearch = (e) => {
    setSearch(e.target.value);
    const fltItems = lostItems.filter(item => item.object.toLowerCase().includes(search.toLowerCase()));
    setFilteredItems((prev) => prev = fltItems);
    console.log(filteredItems);
  }
  
  return (
    <>
      {/* <SearchInput search={search} handleSearch={handleInputSearch}/> */}
      <SearchInput search={search} handleSearch={handleInputSearch}>
        <ClicksMade/>
      </SearchInput>

      <section className="lostItem-container">
        <h2>Items perdidos</h2>
        <section id='lostItems'>
          {/* PENDING REFACTOR */}
        {
          !lostItems
          ? <p>No hay items perdidos</p>
          : lostItems
            .filter((item) => item.object.toLowerCase().includes(search.toLowerCase()))
            .map((item) => (
              <LostItem 
                key={item.id} 
                lostItem={item} 
                handleFound={() => handleDeleteLostItem(item.id)}
              />
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
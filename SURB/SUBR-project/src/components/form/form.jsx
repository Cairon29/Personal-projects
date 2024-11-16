export const Form = ({lostItemObject, hdlInputObject, handleSubmit}) => {
  
  /* ON IT */
  /* has to come an object by props to modify VALUES of the inputs*/
  
  
  /* PENDING */
  /* has to receive an object with the functions capable to controle the values of all inputs */
  {/* cuando se elimine un elemento perdido se generara una fecha aleatoria para el dateFound */}

  return (
    <>
      <section id="form">
          <h2>Añade un objeto perdido</h2>
          <form onSubmit={handleSubmit}>

              <label htmlFor="objeto"> Objeto:</label>
              <input 
                placeholder="Ej: Iphone 12" 
                name="objeto" 
                type="text" 
                value={lostItemObject.object} 
                onChange={hdlInputObject.handleObjectName}
              />
              
              <label htmlFor="descripcion">Descripcion</label>
              <input 
                placeholder="Descripcion" 
                name="descripcion" 
                type="text" 
                value={lostItemObject.description} 
                onChange={hdlInputObject.handleDescription}
              />
             
              <label htmlFor="dateLost">Fecha de perdida</label>
              <input 
                placeholder="Fecha de perdida" 
                name="dateLost" 
                type="date" 
                value={lostItemObject.dateLost} 
                onChange={hdlInputObject.handleDateLost}
              />
              
              <label htmlFor="foundIn">Encontrado en:</label>
              <input 
                placeholder="Teatro" 
                name="foundIn" 
                type="text" 
                value={lostItemObject.foundIn} 
                onChange={hdlInputObject.handleFoundIn}
              />
              
              <label htmlFor="foundBy">Encontrado por:</label>
              <input 
                placeholder="Tu nombre" 
                name="foundBy" 
                type="text"
                value={lostItemObject.foundBy} 
                onChange={hdlInputObject.handleFoundBy}
              />
              
              <button type="submit"> Añadir</button>
          </form>
      </section>
    </>
  )
}

export const Form = ({lostItemObject, hdlInputObject, handleSubmit}) => {
  return (
    <>
      <section id="form">
          <h2>Añade un objeto perdido</h2>
          <form onSubmit={handleSubmit} name="form">

              <label htmlFor="objeto"> Objeto:</label>
              <input 
                placeholder="Ej: Iphone 12" 
                id="objeto" 
                type="text" 
                value={lostItemObject.object} 
                onChange={hdlInputObject.handleObjectName}
              />
              
              <label htmlFor="descripcion">Descripcion</label>
              <input 
                placeholder="Descripcion" 
                id="descripcion" 
                type="text" 
                value={lostItemObject.description} 
                onChange={hdlInputObject.handleDescription}
              />
             
              <label htmlFor="dateLost">Fecha de perdida</label>
              <input 
                placeholder="Fecha de perdida" 
                id="dateLost" 
                type="date" 
                value={lostItemObject.dateLost} 
                onChange={hdlInputObject.handleDateLost}
              />
              
              <label htmlFor="foundIn">Encontrado en:</label>
              <input 
                placeholder="Teatro" 
                id="foundIn" 
                type="text" 
                value={lostItemObject.foundIn} 
                onChange={hdlInputObject.handleFoundIn}
              />
              
              <label htmlFor="foundBy">Encontrado por:</label>
              <input 
                placeholder="Tu nombre" 
                id="foundBy" 
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

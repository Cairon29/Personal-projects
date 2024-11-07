export const Form = ({name, handleName, description, handleDescription, date, handleDate, foundIn, handleFoundIn, handleSubmit}) => {
  return (
    <>
    <section>
        <h2>Añade un objeto perdido</h2>
        <form onSubmit={handleSubmit}>
            <input placeholder="Nombre" type="text" value={name} onChange={handleName}/>
            <input placeholder="Descripcion" type="text" value={description} onChange={handleDescription}/>
            <input placeholder="Fecha" type="date" value={date} onChange={handleDate}/>

            <input placeholder="Teatro" type="text" value={foundIn} onChange={handleFoundIn}/>
            <button type="submit"> Añadir</button>
        </form>
    </section>
    </>
  )
}

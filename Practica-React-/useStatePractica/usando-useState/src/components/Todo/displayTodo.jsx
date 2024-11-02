export const DisplayTodo = ({vProduct, vAmount, hdlProduct, hdlAmount, dltItem, addItem, list}) => {

  return (
    <section>
        <h2>🛒 Shopping List 🛒</h2>
        <h3>¿Que quieres comprar?</h3>
        <input type="text" placeholder="Producto" value={vProduct} onChange={hdlProduct}/>
        <h3>¿Cuanto quieres comprar?</h3>
        <input type="number" placeholder="Cantidad" value={vAmount} onChange={hdlAmount}/>
            <br/>
        <button onClick={addItem}>Añadir</button>
        <ul className="lista">
            {list.map((elemento) => (
            <li key={elemento.id}> 
                {elemento.amount} de {elemento.product}
                <button className="mini button" onClick={() => dltItem(elemento.id)}>×</button>
                                        {/* ARREGLAR LA EJECUCION ANONIMA DE dltItem */}
            </li>
            ))}
        </ul>
    </section>
  )
}

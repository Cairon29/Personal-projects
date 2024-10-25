import { useState } from "react";

export const ToDo = () => {

    const [lista, setLista] = useState([]);
    const [inputProducto, setinputProducto] = useState('')
    const [inputCantidad, setinputCantidad] = useState()

    console.log(lista)

    const handleProduct = (e) => {
        setinputProducto(e.target.value)
    }
    const handleAmount = (e) => {
        setinputCantidad(e.target.value)
    }
    const addToList = () => {
        if (inputProducto != false && inputCantidad == undefined) {
            setLista([...lista,{product: inputProducto,  amount: 1}])
            setinputProducto('')
            setinputCantidad(undefined)
        } else if (inputProducto != false && inputCantidad != false){
            setLista([...lista,{product: inputProducto, amount: inputCantidad}])
            setinputProducto('')
            setinputCantidad(undefined)
        }
    }
    
    // setLista([...lista,{product: inputProducto, amount: inputCantidad}])
    // setinputProducto('')
    // setinputCantidad()
    const deleteItem = (index) => {
        setLista(lista.filter((_, i) => i !== index));
    }
    console.log(lista)
    return (
        <section>
            <h3>¿Que quieres comprar?</h3>
            <input type="text" placeholder="Producto" value={inputProducto} onChange={handleProduct}/>
            <h3>¿Cuanto quieres comprar?</h3>
            <input type="number" placeholder="Cantidad" value={inputCantidad} onChange={handleAmount}/>
                <br/>
            <button onClick={addToList}>Añadir</button>
            <ul className="lista">
                {lista.map((elemento, index) => (
                <li key={index}> 
                    {elemento.amount} de {elemento.product}
                    <button className="mini button" onClick={() => deleteItem(index)}>×</button>
                </li>
                ))}
            </ul>
        </section>
    )
}
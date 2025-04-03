import { DisplayTodo } from "./displayTodo"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Todo = () => {

    const [lista, setLista] = useState([]);
    const [inputProducto, setinputProducto] = useState('')
    const [inputCantidad, setinputCantidad] = useState()

    const handleProduct = (e) => {
        setinputProducto(e.target.value)
    }
    const handleAmount = (e) => {
        setinputCantidad(e.target.value)
    }

    const addToList = () => {
        if (inputProducto != false && inputCantidad == undefined) {
            setLista([...lista, {product: inputProducto,  amount: 1, id: uuidv4()}])
            setinputProducto('')
            setinputCantidad(undefined)
        } else if (inputProducto != false && inputCantidad != false){
            setLista([...lista,{product: inputProducto, amount: inputCantidad}])
            setinputProducto('')
            setinputCantidad(undefined)
        }
    }

    const deleteItem = (id) => {
        setLista(lista.filter((item) => item.id !== id));
    }
    // Se puede concatenar funciones de borrado para evitar la 
    // funcion anonima en el componente hijo (Gustos)
  return (
    <DisplayTodo
        vProduct={inputProducto}
        vAmount={inputCantidad}
        hdlProduct={handleProduct}
        hdlAmount={handleAmount}
        dltItem={deleteItem}
        addItem={addToList}
        list={lista}
    />
  )
}

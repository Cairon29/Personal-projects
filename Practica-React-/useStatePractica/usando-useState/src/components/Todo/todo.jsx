import { DisplayTodo } from "./displayTodo"
import { useState } from "react";

export const Todo = () => {

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
    const deleteItem = (index) => {
        setLista(lista.filter((_, i) => i !== index));
    }

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

import { useState } from "react"
import { PlushiesForm } from "../components/PlushiesForm"
import { Link } from "react-router-dom";

export const RegisterPlush = () => {
    const [plush, setPlush] =  useState({
        name: '',
        cost: '',
        stock: ''
    });
    
    const handleFunctions = {
        hdlName: (e) => {
            setPlush((prev) => ({...prev, name: e.target.value}))
        },
        hdlCost: (e) => {
            setPlush((prev) => ({...prev, cost: e.target.value}))
        },
        hdlStock: (e) => {
            setPlush((prev) => ({...prev, stock: e.target.value}))
        },
        hdlSubmit: async (e) => {
            e.preventDefault()
            try {
                setPlush((prev) => ({
                    ...prev, 
                    cost: parseFloat(e.target.value),
                    stock: parseInt(e.target.value)
                }))
                
                await fetch('http://localhost:3000/api/plushies', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(plush)
                })
                console.log(plush)
            } catch (e) {
                console.log('there was an error pushing the data into the backend: ', err);
            } finally {
                setPlush({
                    name: '',
                    cost: 0,
                    stock: 0
                })
            }
        }
    }

    return (
        <>
            <h1>Register new plushies</h1>
            <PlushiesForm val={plush} fnc={handleFunctions}/>
            <Link to='/login'>Back to login</Link>
            <br />
            <Link to='/'>Home</Link>
        </>
    )
}

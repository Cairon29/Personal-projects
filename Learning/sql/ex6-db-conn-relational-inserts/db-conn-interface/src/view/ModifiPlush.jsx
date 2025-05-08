import { PlushiesForm } from "../components/PlushiesForm"

export const ModifyPlush = () => {
    const [plush, setPlush] =  useState({
        name: '',
        cost: '',
        stock: ''
    });
    
    const handleFunctions = {
        hdlName: (e) => {
            setPlush((prev) => ({...prev, name: e.target.value.trim()}))
        },
        hdlCost: (e) => {
            setPlush((prev) => ({...prev, cost: e.target.value.trim()}))
        },
        hdlStock: (e) => {
            setPlush((prev) => ({...prev, stock: e.target.value.trim()}))
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
                    method: 'PATCH',
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
                    cost: '',
                    stock: ''
                })
            }
        }
    }
    return (
        <> 
            <h2>Modify your plush</h2>
            <PlushiesForm val={plush} fnc={handleFunctions}/>
        </>
    )
}

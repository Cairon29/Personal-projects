import { useState } from "react"

export const Form = () => {
    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    })

    const hdlName = (e) => {
        setUser((prev) => ({...prev, name: e.target.value}))
    }
    const hdlSurname = (e) => {
        setUser((prev) => ({...prev, surname: e.target.value}))   
    }
    const hdlEmail = (e) => {
        setUser((prev) => ({...prev, email: e.target.value}))   
    }
    const hdlpassword = (e) => {
        setUser((prev) => ({...prev, password: e.target.value}))   
    }

    const hdlSubmit = async (e) => {

        try {
            e.preventDefault()
            const request = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
    
            const data = await request.json()
            console.log(data);
            setUser({
                name: '',
                surname: '',
                email: '',
                password: ''
            })
        } catch (err) {
            console.log('there was an error pushing the data into the backend: ', err);
        } finally {
            setUser({
                name: '',
                surname: '',
                email: '',
                password: ''
            })
        }
    }

    return (
        <form onSubmit={hdlSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={hdlName} value={user.name} required placeholder="jean" name="name"/>
            <br />
            <label htmlFor="surname">Surname</label>
            <input type="text" onChange={hdlSurname} value={user.surname} required placeholder="patrick" name="surname"/>
            <br />
            <label htmlFor="email">Email</label>
            <input type="email" onChange={hdlEmail} value={user.email} required placeholder="email@example.com"/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" onChange={hdlpassword} value={user.password} required placeholder="your_Password123"/>
            <br />
            <br />
            <button type="submit">Register user!</button>
        </form>
    )
}

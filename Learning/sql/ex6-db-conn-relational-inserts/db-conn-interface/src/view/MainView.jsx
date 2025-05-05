import { useEffect, useState  } from "react"
import { Link } from "react-router-dom"

export const MainView = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        try {
            const fetchUsers = async () => {
                const request = await fetch('http://localhost:3000/api/users')
                const data = await request.json()
                setUser(data)
        
                console.log(user)
            }
            fetchUsers();
        } catch (e) {
            console.log('there was an error pushing the data into the backend: ', err);
        }
    }, [])
    return (
        <>
            <Link to='/register-user'>Register users</Link>
            <br />
            <Link to='/register-plushies'>Register plushies</Link>
            <br />
            <Link to='/login'>Login</Link>
        </>
    )
}

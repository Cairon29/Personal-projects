import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const MainView = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/users')
                const data = await response.json()

                if (!response.ok) {
                    throw new Error('Failed to fetch users')
                }
                setUsers(data)
            } catch (err) {
                console.error('Error fetching users:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])
    if (loading) return <p>Loading users...</p> 
    return (
        <>
            {error && <p style={{color: 'red'}}>{error}</p>}
            
            <div>
                <h2>Users List:</h2>
                {users.map(user => (
                    <div key={user.user_id}>
                        {user.name} {user.surname} - {user.email}
                    </div>
                ))}
            </div>
            <nav>
                <Link to='/plushies'>Plushies</Link>
                <br />
                <Link to='/register-user'>Register users</Link>
                <br />
                <Link to='/register-plushies'>Register plushies</Link>
                <br />
                <Link to='/login'>Login</Link>
                <br />
                <Link to='/modify-plush'>Modify plush</Link>
            </nav>
        </>
    )
}

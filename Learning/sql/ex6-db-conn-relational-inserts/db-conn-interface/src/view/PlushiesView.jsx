import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const PlushiesView = () => {
    const [plushies, setPlushies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPlushies = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/plushies')
                const data = await response.json()

                if (!response.ok) {
                    throw new Error('Failed to fetch at least a plush')
                }
                setPlushies(data)
            } catch (err) {
                console.error('Error fetching plushies:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPlushies()
    }, [])
    if (loading) return <p>Loading plushies...</p> 
    return (
        <>
            {error && <p style={{color: 'red'}}>{error}</p>}
            
            <div>
                <h2>Plushies List:</h2>
                {plushies.map(plush => (
                    <div key={plush.plush_id}>
                        {plush.name} {plush.cost} - {plush.stock}
                    </div>
                ))}
            </div>
            <nav>
                <Link to='/plushes'>Plushies</Link>
                <br />
                <Link to='/register-user'>Register users</Link>
                <br />
                <Link to='/register-plushies'>Register plushies</Link>
                <br />
                <Link to='/login'>Login</Link>
                <br />
            </nav>
        </>
    )
}

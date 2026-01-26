import { Link } from 'react-router-dom';

export const Landing = () => {
    return (
        <div>
            <h1>Landing</h1>
            <section>
                <div>
                    <Link to="/login">Login</Link>
                </div>
                <div>
                    <Link to="/register">Register</Link>
                </div>
            </section>
        </div>
    )
}
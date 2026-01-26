import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        // TODO: move the post user logic API to the auth register API
        const response = await fetch(`${import.meta.env.VITE_BACKEND_ROUTE}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.success) {
            navigate('/home');
        }
    }

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={register}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
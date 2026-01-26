import { useAuthStore } from "../store/session";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const logout = useAuthStore((state) => state.logout);
    const initializeAuth = useAuthStore((state) => state.initializeAuth);
    const user = useAuthStore((state) => state.user);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Initialize auth from cookies on component mount
        initializeAuth();
        setIsInitialized(true);
    }, [initializeAuth]);

    useEffect(() => {
        if (isInitialized && !isAuthenticated) {
            console.log("User not authenticated, redirecting to login");
            navigate('/login');
        }
    }, [isInitialized, isAuthenticated, navigate]);

    if (!isInitialized) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated || !user) {
        console.log("User not authenticated, returning nothing");
        return null;
    }

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome, {user.email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
import { create } from 'zustand';
import Cookies from 'js-cookie';

interface User {
    id?: string;
    email: string;
    full_name?: string;
    phone?: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
    register: (full_name: string, email: string, password: string, phone: string) => Promise<{ success: boolean; message?: string }>;
    logout: () => void;
    initializeAuth: () => void;
}

const COOKIE_OPTIONS = {
    expires: 7, // 7 days
    secure: false, // Set to true in production with HTTPS
    sameSite: 'strict' as const,
};

const setAuthCookies = (user: User, token: string) => {
    Cookies.set('auth_token', token, COOKIE_OPTIONS);
    Cookies.set('user_data', JSON.stringify(user), COOKIE_OPTIONS);
};

const removeAuthCookies = () => {
    Cookies.remove('auth_token');
    Cookies.remove('user_data');
};

const getAuthFromCookies = (): { user: User | null; token: string | null; isAuthenticated: boolean } => {
    try {
        const token = Cookies.get('auth_token');
        const userData = Cookies.get('user_data');
        
        if (token && userData) {
            const user = JSON.parse(userData);
            return { user, token, isAuthenticated: true };
        }
        
        return { user: null, token: null, isAuthenticated: false };
    } catch (error) {
        console.error('Error parsing auth cookies:', error);
        return { user: null, token: null, isAuthenticated: false };
    }
};

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: null,
    isAuthenticated: false,

    login: async (email: string, password: string) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BACKEND}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                console.log("Backend response data:", data);
                
                const authData = {
                    user: data.user,
                    token: data.token,
                    isAuthenticated: true,
                };

                set(authData);
                setAuthCookies(data.user, data.token);

                console.log("Login successful - cookies set");
                console.log("Token stored:", data.token);
                console.log("User data stored:", data.user);

                return { success: true };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            return { success: false, message: error instanceof Error ? error.message : 'Login failed' };
        }
    },

    register: async (full_name: string, email: string, password: string, phone: string) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BACKEND}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ full_name, email, password, phone }),
            });

            const data = await response.json();

            if (data.success) {
                const authData = {
                    user: data.user,
                    token: data.token,
                    isAuthenticated: true,
                };

                set(authData);
                setAuthCookies(data.user, data.token);
                
                return { success: true };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            return { success: false, message: error instanceof Error ? error.message : 'Registration failed' };
        }
    },

    logout: () => {
        set({
            user: null,
            token: null,
            isAuthenticated: false,
        });
        removeAuthCookies();
        console.log("Logged out - cookies removed");
    },

    initializeAuth: () => {
        const { user, token, isAuthenticated } = getAuthFromCookies();
        if (isAuthenticated) {
            set({ user, token, isAuthenticated });
            console.log("Auth initialized from cookies");
        }
    },
}));

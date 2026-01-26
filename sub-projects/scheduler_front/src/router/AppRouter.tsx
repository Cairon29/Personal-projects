import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from '../pages/landing';
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Register } from '../pages/register';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

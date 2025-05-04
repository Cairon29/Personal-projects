import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RegisterUser } from '../view/RegisterUser'
import { Login } from '../view/Login'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<RegisterUser/>}/>
                <Route path='/login' element = {<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

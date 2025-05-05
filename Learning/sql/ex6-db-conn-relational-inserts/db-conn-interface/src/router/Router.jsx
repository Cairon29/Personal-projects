import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RegisterUser } from '../view/RegisterUser'
import { RegisterPlush } from '../view/RegisterPlush'
import { Login } from '../view/Login'
import { MainView } from '../view/MainView'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainView/>}/>
                <Route path='/register-user' element ={<RegisterUser/>}/>
                <Route path='/login' element = {<Login/>}/>
                <Route path='/register-plushies' element = {<RegisterPlush/>}/>
            </Routes>
        </BrowserRouter>
    )
}

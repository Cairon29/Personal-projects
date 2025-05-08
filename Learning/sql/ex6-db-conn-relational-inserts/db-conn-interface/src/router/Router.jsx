import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RegisterUser } from '../view/RegisterUser'
import { RegisterPlush } from '../view/RegisterPlush'
import { Login } from '../view/Login'
import { MainView } from '../view/MainView'
import { PlushiesView } from '../view/PlushiesView'
import { ModifyPlush } from '../view/ModifiPlush'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainView/>}/>
                <Route path='/plushies' element={<PlushiesView/>}/>
                <Route path='/register-user' element ={<RegisterUser/>}/>
                <Route path='/login' element = {<Login/>}/>
                <Route path='/register-plushies' element = {<RegisterPlush/>}/>
                <Route path='/modify-plush' element={<ModifyPlush/>}/>
            </Routes>
        </BrowserRouter>
    )
}

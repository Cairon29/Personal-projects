import { BrowserRouter, Route, Routes } from "react-router-dom"

import { LogIn } from "../modules/log-in/LogIn"
import { Register } from "../modules/register/register"
import { Dashboard } from "../modules/dashboard/Dashboard"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signin" element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={ <h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

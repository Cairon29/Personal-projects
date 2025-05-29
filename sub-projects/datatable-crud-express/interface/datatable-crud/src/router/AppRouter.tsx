import { BrowserRouter, Route, Routes } from "react-router-dom"

import { LogIn } from "../modules/log-in/LogIn"
import { SignIn } from "../modules/sign-in/SignIn"
import { Dashboard } from "../modules/dashboard/Dashboard"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={ <h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

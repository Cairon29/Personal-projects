import { Link } from "react-router-dom"
import { FormLogin } from "./Form-login"

export const LogIn = () => {
    return (
        <>
            <h1>LogIn YEAH!</h1>
            <FormLogin/>  
            <br />
            <hr />
            <Link to="/signin">
                Do not have an account yet?
                <br />
                Sign In Here 
            </Link>
        </>
    )
}

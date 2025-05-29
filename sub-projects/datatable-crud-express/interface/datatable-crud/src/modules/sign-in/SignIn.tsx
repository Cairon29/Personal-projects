import { Link } from "react-router-dom"
import { FormSignIn } from "./Form-signin"

export const SignIn = () => {
    return (
        <>
            <h1>Sign In Yeah!</h1>
            <FormSignIn/>
            <br />
            <button>Sign In</button>
            <br />
            <br />
            <hr />
            <Link to="/">
                Already have an account?
                <br />
                Log in In Here 
            </Link>
        </>
    )
}

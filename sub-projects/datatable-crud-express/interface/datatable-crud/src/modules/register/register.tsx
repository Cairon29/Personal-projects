import { Link, useNavigate  } from "react-router-dom"
import { useForm, type SubmitHandler } from "react-hook-form"
import { registerSchema, type registerForm } from "../../schemas/register"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { CustomInputRegister } from "../../components/CustomInputRegister"

export const Register = () => {

    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState<null | string>('')

    const { control, handleSubmit, formState: { errors } } = useForm<registerForm>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            nombres: '',
            apellidos: '',
            email: '',
            password: '',
            confirm_password: ''
        },
    })

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<registerForm> =  async (data) => {
        
        setLoading(true)

        try {

            const proccesed_data = {
                nombres: data.nombres,
                apellidos: data.apellidos,
                email: data.email,
                password: data.password,
                rol: 1
            }

            const request = await fetch('http://localhost:5556/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(proccesed_data)
            })
            
            if (request.ok) {
                alert('User created successfully!')
                navigate('/login')
            } else {
                const response = await request.json()
                setServerError(response.message || 'Error al iniciar sesión')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <h1>Register</h1>
            <br />
            <form action="" onSubmit={handleSubmit(onSubmit)} className="user-form">
                <CustomInputRegister name="nombres" control={control} label="Nombres" error={errors.nombres} placeholder="John"/>
                <CustomInputRegister name="apellidos" control={control} label="Apellidos" error={errors.apellidos} placeholder="Doe"/>
                <CustomInputRegister name="email" control={control} label="Email" type="email" error={errors.email} placeholder="doe@email.com"/>
                <CustomInputRegister name="password" control={control} label="Password" error={errors.password} placeholder="John123"/>
                <CustomInputRegister name="confirm_password" control={control} label="Confirm password" type="password" error={errors.confirm_password} placeholder="John123"/>
                <button type='submit' disabled={loading}>
                    { loading ? 'Loading...' : 'Log In' }
                </button>

                { serverError && <p className='error'>{serverError}</p> }
            </form>
            <br />
            <hr />
            <Link to="/login">
                Already have an account?
                <br />
                Log in In Here 
            </Link>
        </>
    )
}

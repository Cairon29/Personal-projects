import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginForm } from '../../schemas/login'
import { CustomInputLogin } from '../../components/CustomInputLogin'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const LogIn = () => {

    const [loading, setLoading] =  useState(false)
    const [serverError, setServerError] = useState<null | string>('')

    const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<LoginForm> =  async (data) => {
        
        setLoading(true)
        
        try {
            const request = await fetch('http://localhost:5556/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (request.ok) {
                navigate('/dashboard')
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
            <h1>Log in</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='user-form'>
                <CustomInputLogin name='email' control={control} label='Email' type='email' error={errors.email}/>
                <CustomInputLogin name='password' control={control} label='Password' type='password' error={errors.password}/>
                <button type='submit' disabled={loading}>
                    { loading ? 'Loading...' : 'Log In' }
                </button>

                { serverError && <p className='error'>{serverError}</p> }
            </form>
            <br />
            <hr />
            <Link to="/signin">
                No account just yet?
                <br />
                Sign in here!
            </Link>
        </>
    )
}

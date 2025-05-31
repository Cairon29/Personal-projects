import { Controller, type Control, type FieldError } from "react-hook-form"
import type { LoginForm } from "../schemas/login"


interface Props {
    name: keyof LoginForm 
    control: Control<LoginForm>
    label: string
    type?: string
    error?: FieldError
    placeholder?: string
}

export const CustomInputLogin = ({ name, control, label, type, error, placeholder }: Props) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                    <input 
                        id={name} 
                        type={type}
                        {...field}
                        className={`input-form ${error && "input-error"}`}
                        placeholder={placeholder}
                    />
                }
            />
            {error && <p className="error">{error.message}</p>}
            <br />
        </>
    )
}

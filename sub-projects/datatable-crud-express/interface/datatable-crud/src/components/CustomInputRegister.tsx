import { Controller, type Control, type FieldError } from "react-hook-form"
import type { registerForm } from "../schemas/register.tsx"


interface Props {
    name: keyof registerForm 
    control: Control<registerForm>
    label: string
    type?: string
    error?: FieldError
    placeholder?: string
}

export const CustomInputRegister = ({ name, control, label, type, error, placeholder }: Props) => {
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

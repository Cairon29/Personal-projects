import React from 'react'


type Props = {
    label: string
    name: string
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type: string
    required: boolean
    min?: string
    step?: string
}
export const GenericInput = ({ label, name, value, onChange, type, required, min, step}: Props) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className='form-control'
                required={required}
                min={min}
                step={step}
            />
        </div>
    )
}

import React from 'react'

const InputText = ({
    className,
    type = 'text',
    isInvalid,
    errorMessage = null,
    ...props
}) => {
    return (
        <>
        <input 
        className={`input-text ${className} ${(isInvalid && errorMessage) ? 'invalid' : ''}`} 
        type={type}
        {...props}
        />
        {
            (isInvalid && errorMessage) && <p className='input-error-message'>{errorMessage}</p>
        }
        </>
    )
}

export default InputText
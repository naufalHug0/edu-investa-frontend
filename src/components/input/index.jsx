import React from 'react'

const Input = ({
    placeholder,
    type = 'text',
    validation = { isInvalid: false },
    className,
    ...rest
}) => {

    const InputField = ({ invalid }) => <input type={type} placeholder={placeholder} className={`${type == 'text' ? 'input-text':''} ${invalid ? 'invalid' : ''} ${className}`} {...rest}/>

    const ErrorMessage = () => validation.isInvalid && <p className='input-error-message'>{validation.message}</p>

    return (
        <>
        <InputField invalid={validation.isInvalid}/>
        {
            type == 'text' && <ErrorMessage/>
        }
        </>
    )
}

export default Input
import React from 'react'

const Button = ({type = "btn-primary", className, children, ...rest}) => {
    return (
        <div className={`${type} ${className}`} {...rest}>{children}</div>
    )
}

export default Button
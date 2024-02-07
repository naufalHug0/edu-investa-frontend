import React from 'react'
import { Button } from '../../../../components'

const Menu = ({ children, buttonText, className, onButtonClick }) => {
    return (
        <div className='w-[95%] sm:max-w-[650px]'>
            <div className={`rounded-md bg-green-light border border-black px-6 py-7 ${className}`}>
                {children}
            </div>
            <Button className='w-full mt-5' onClick={onButtonClick}>{buttonText}</Button>
        </div>
    )
}

export default Menu
import React from 'react'
import Icon from '../icon'
import ChevronLeft from '../../assets/chevron-left.svg'
import { useNavigate } from 'react-router'


const BackNavigation = ({
    handleBackNavigation
}) => {
    const navigateTo = useNavigate()
    const defaultNavigation = () => navigateTo('/app')
    
    return (
        <header className='flex items-center border-b border-black bg-white fixed top-0 right-0 left-0 h-14 px-5 z-20'>
            <Icon src={ChevronLeft} width={18} className='cursor-pointer' onClick={handleBackNavigation || defaultNavigation} />
        </header>
    )
}

export default BackNavigation
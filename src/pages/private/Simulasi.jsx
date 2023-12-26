import React from 'react'
import {BackNavigation} from '../../components'
import { useNavigate } from 'react-router'

const Simulasi = () => {
    const navigateTo = useNavigate()
    const handleBackNavigation = () => navigateTo('/app')

    return (
        <>
            <BackNavigation handleBackNavigation={handleBackNavigation}/>
            <div className="mt-24">

            </div>
        </>
    )
}

export default Simulasi
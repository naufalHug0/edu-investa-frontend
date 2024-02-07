import React from 'react'
import { BackNavigation } from '../../components'
import { useNavigate } from 'react-router'

const Profile = () => {
    const navigateTo = useNavigate()

    return (
        <>
            <BackNavigation handleBackNavigation={() => navigateTo('/app')}/>
            Profile
        </>
    )
}

export default Profile
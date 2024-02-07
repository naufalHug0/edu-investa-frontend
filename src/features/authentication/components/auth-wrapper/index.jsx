import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { AuthServices } from '../../services'
import { Loader, LoadingSpinner, LoadingSpinnerWrapper } from '../../../../components'

const Auth = new AuthServices()

const AuthenticatedWrapper = () => {
    const [userData, setUserData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    Auth.handleSuccess = () => {
        setUserData(
            Auth.responseBody.data
        )
        setIsLoading(false)
    }

    useEffect(() => {
        Auth.me()
    }, [])

    return (
        <Loader isLoading={isLoading} loadingComponent={
            <LoadingSpinnerWrapper>
                <LoadingSpinner/>
            </LoadingSpinnerWrapper>
        }>
            <Outlet context={userData} />
        </Loader>
    )
}

export default AuthenticatedWrapper
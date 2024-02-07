import React, { useEffect, useState } from 'react'
import { Loader, LoadingSpinner, LoadingSpinnerWrapper } from '../../../../components'
import { Outlet, useNavigate } from 'react-router'
import { CourseServices } from '../../services'

const Services = new CourseServices()

const CourseIdGuard = () => {
    const [course, setCourse] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const id = location.pathname.split('/').reverse()[0]
    const navigateTo = useNavigate()

    Services.handleSuccess = () => {
        setCourse(Services.responseBody.data)
        setIsLoading(false)
    }

    Services.handleNotFoundError = () => {
        navigateTo('/app')
    }

    useEffect(() => {
        Services.getById(id)
    },[])

    return (
        <Loader isLoading={isLoading} 
        loadingComponent={
            <LoadingSpinnerWrapper>
                <LoadingSpinner/>
            </LoadingSpinnerWrapper>
        }>
            {
                course && <Outlet context={[course]}/>
            }
        </Loader>
    )
}

export default CourseIdGuard
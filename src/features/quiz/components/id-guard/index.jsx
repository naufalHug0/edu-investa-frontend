import React, { useEffect, useState } from 'react'
import { QuizServices } from '../../services'
import { Loader } from '../../../../components'
import { Outlet, useNavigate } from 'react-router'

const Services = new QuizServices()

const QuizIdGuard = () => {
    const [quiz, setQuiz] = useState(null)
    const id = location.pathname.split('/').reverse()[0]
    const navigateTo = useNavigate()

    Services.handleSuccess = () => {
        setQuiz(Services.responseBody.data)
    }

    Services.handleNotFoundError = () => {
        navigateTo('/app')
    }

    useEffect(() => {
        Services.getById(id)
    },[])

    return (
        <Loader isLoading={quiz === null}>
            <Outlet context={[quiz]}/>
        </Loader>
    )
}

export default QuizIdGuard
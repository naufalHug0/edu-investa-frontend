import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useOutletContext } from 'react-router'

const QuizPlayGuard = () => {
    const { quiz_token } = useSelector(state => state.quiz)
    const id = location.pathname.split('/').reverse()[0]
    const [quiz] = useOutletContext()

    return (
        quiz_token ? <Outlet context={[quiz]}/> : <Navigate to={`/app/quiz/${id}`} />
    )
}

export default QuizPlayGuard
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const QuizCompletedGuard = ({ children }) => {
    const id = location.pathname.split('/').reverse()[0]
    const { has_completed } = useSelector(state => state.quiz)

    return (
        has_completed ? children : <Navigate to={`/app/quiz/${id}`} />
    )
}

export default QuizCompletedGuard
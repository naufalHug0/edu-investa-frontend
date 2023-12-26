import React from 'react'

const QuestionTransition = ({ children, toggle }) => {
    return (
        <div className={`${toggle ? 'animate-fade-out-left':'translate-x-0 animate-fade-in'}`}>{children}</div>
    )
}

export default QuestionTransition
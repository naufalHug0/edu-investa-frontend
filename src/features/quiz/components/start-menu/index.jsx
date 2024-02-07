import React, { useEffect, useState } from 'react'
import Menu from '../menu'
import ListOl from '../../../../assets/list-ol.svg'
import ClockHistory from '../../../../assets/clock-history.svg'
import { CancelButton, Icon, Loader } from '../../../../components'
import { Navigate, useLocation, useNavigate, useOutletContext } from 'react-router'
import { formatSecondsToTimeString, generateToken } from '../../utils'
import { QuizReduxController } from '../../services'
import { useSelector } from 'react-redux'

const StartMenu = () => {
    const navigateTo = useNavigate()
    const location = useLocation()
    const id = location.pathname.split('/').reverse()[0]
    const [quiz] = useOutletContext()
    const { quiz_token } = useSelector(state => state.quiz)
    
    const onStart = () => {
        QuizReduxController.setQuizToken(generateToken())
    }

    if (quiz_token) return <Navigate to={`/app/quiz/playing/${id}`} />

    return (
        quiz && <>
        <div className="flex justify-center items-center h-screen w-full">
        <CancelButton onClick={() => navigateTo('/app')} className='absolute left-4 top-4'/>
        <Menu buttonText='Mulai' onButtonClick={onStart}>
            <h1 className='text-red-default text-stroke text-stroke-black font-bold text-4xl'>{quiz.title}</h1>
            <div className="edu-category-primary w-max mt-3">EduGames</div>
            <footer className="flex justify-between items-center mt-12 border-t border-black border-dashed pt-4">
                <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-3">
                        <Icon src={ListOl} width={20}/>
                        <p className="font-bold">{quiz.questions_count} Pertanyaan</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Icon src={ClockHistory} width={20}/>
                        <p className="font-bold">{formatSecondsToTimeString(quiz.duration)}</p>
                    </div>
                </div>
                <div className="xp-label text-sm">{quiz.total_reward} XP</div>
            </footer>
        </Menu>
        </div>
        </>
    )
}

export default StartMenu
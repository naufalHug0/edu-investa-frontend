import React, { useEffect, useMemo, useState } from 'react'
import TimerBar from '../timer-bar'
import QuestionForm from '../question-form'
import { getLoadingPersentage, formatNumber } from '../../utils'
import QuizPlayGuard from '../play-guard'
import { useTimer } from '../../hooks'
import { SkillActiveTimer, Skills } from '../../../skills/components'
import { Navigate, useNavigate, useOutletContext } from 'react-router'
import { QuizReduxController } from '../../services'
import { useSelector } from 'react-redux'

const Play = () => {
    const [seconds, setSeconds] = useState(3)
    const [minuteString, setMinuteString] = useState(0)
    const [secondString, setSecondString] = useState(0)
    const [showCountDown, setShowCountDown] = useState(true)
    const [activeSkill, setActiveSkill] = useState(useSelector(state => state.skill))
    const { has_completed } = useSelector(state => state.quiz)
    const id = location.pathname.split('/').reverse()[0]
    const navigateTo = useNavigate()
    const [quiz] = useOutletContext()
    const [clearTimer] = useTimer(setSeconds)

    const onBeforeUnload = e => {
        e.preventDefault()
        e.returnValue = "Yakin mau keluar game?"

        QuizReduxController.resetQuizStates()
    }

    useEffect(() => {
        if (has_completed) {
            navigateTo(`/app/quiz/end/${id}`)
        }
    }, [has_completed])

    useEffect(() => {
        if (seconds === 0 && showCountDown) {
            setShowCountDown(false)
            setSeconds(quiz.duration)
        }
    }, [showCountDown, seconds])

    useEffect(() => {
        if (seconds === 0 && !showCountDown) {
            clearTimer()
            QuizReduxController.setHasCompleted(true)
        }

        const onSecondChange = () => {
            setMinuteString(Math.floor(seconds / 60))
            setSecondString(seconds % 60)
        }

        onSecondChange()

        window.addEventListener("beforeunload", onBeforeUnload)
        
        return () => {
            window.removeEventListener("beforeunload", onBeforeUnload)
        }
    }, [seconds])

    return (
        <div className='bg-[#475353] w-full flex items-center flex-col pt-8 overflow-y-hidden min-h-screen'>
            {
                showCountDown ? <div className="select-none absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-[80vh] text-white font-secondary">{seconds}</div> :
                <>
                {/* {
                    true && <SkillActiveTimer progress={100}/>
                } */}
                <div className="w-[90%] sm:w-[80%] md:w-[65%]">
                    <TimerBar className='w-full' 
                    progress={getLoadingPersentage(seconds, quiz.duration)}
                    time={{
                        minute: formatNumber(minuteString),
                        second: formatNumber(secondString)
                    }}
                    />
                    <QuestionForm/>
                </div>
                <Skills/>
                </>
            }
        </div>
    )
}

export default Play
import React, { useState } from 'react'
import TimerBar from '../timer-bar'
import QuestionForm from '../question-form'
import { getLoadingPersentage, formatNumber } from '../../utils'
import { useTimer } from '../../hooks'
import Skills from '../skills'

const Play = () => {
    const total_seconds = 60
    const [seconds, setSeconds] = useState(total_seconds)

    useTimer(seconds, setSeconds)

    return (
        <div className='bg-[#475353] w-full flex items-center flex-col pt-8 overflow-y-hidden'>
            <div className="w-[90%] sm:w-[80%] md:w-[65%]">
                <TimerBar className='w-full' 
                progress={getLoadingPersentage(seconds, total_seconds)}
                time={{
                    minute: formatNumber(2),
                    second: formatNumber(seconds)
                }}
                />
                <QuestionForm />
            </div>
            <Skills/>
        </div>
    )
}

export default Play
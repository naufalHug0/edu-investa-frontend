import React, { useEffect, useState } from 'react'
import { useTimer } from '../../../quiz/hooks'
import { getLoadingPersentage } from '../../../quiz/utils'

const SkillActiveTimer = ({
    active_duration,
    progress
}) => {
    const [seconds, setSeconds] = useState(active_duration)
    const [clearTimer] = useTimer(setSeconds)

    useEffect(() => {
        if (seconds === 0) {
            clearTimer()
        }
    }, [seconds])

    return (
        <div className={`absolute top-0 left-0 h-2 transition-all ease-out ${progress <= 20 ? 'bg-red-default' : 'bg-gradient-to-l gradient-green'}`} style={{ width: `${getLoadingPersentage(seconds, active_duration)}%` }}></div>
    )
}

export default SkillActiveTimer
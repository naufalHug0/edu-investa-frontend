import React from 'react'
import Clock from '../../../../assets/clock.svg'
import { Icon } from '../../../../components'

const TimerBar = ({
    className,
    progress,
    time
}) => {
    return (
        <div className={`timer-bar w-96 overflow-hidden px-3 ${className}`}>
            <p className="font-extrabold text-white text-3xl relative z-10 m-auto">{time.minute}:{time.second}</p>
            <div className={`absolute top-0 bottom-0 left-0 rounded-full transition-all ease-out ${progress <= 20 ? 'bg-red-default' : 'bg-gradient-to-l gradient-green'}`} style={{ width: `${progress}%` }}></div>
            <Icon src={Clock} width={35} className='text-[rgba(255,255,255,.5)] relative z-10'/>
        </div>
    )
}

export default TimerBar
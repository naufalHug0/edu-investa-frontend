import React, { useRef } from 'react'
import Card from '../card'
import { useScrollPosition } from '../../hooks'
import { SlideControllerListener } from "../../utils";
import { SlideController, ViewAllLink } from '../../../../components'

const QuizSection = () => {
    const container = useRef(null)
    const scrollPosition = useScrollPosition(container)
    const isEndReached = container.current && scrollPosition + container.current.clientWidth === container.current.scrollWidth

    return (
        <div className='mt-20 w-[90%] m-auto' ref={container}>
            <h1 className="section-title">EduGames</h1>
            <div className="mt-6 flex gap-4 overflow-scroll pr-3 pb-3 items-center">
                {
                    [...Array(5)].map((_,i) => {
                        return <Card key={i}/>
                    })
                }
                <ViewAllLink className='ml-4 w-max'/>
            </div>
            <SlideController className='mt-4'
            onLeftClick={SlideControllerListener.handleLeftClick}
            onRightClick={SlideControllerListener.handleRightClick}
            />
        </div>
    )
}

export default QuizSection
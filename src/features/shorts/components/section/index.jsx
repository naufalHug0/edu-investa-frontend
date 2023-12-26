import React from 'react'
import Card from '../card'
import { SlideController, ViewAllLink } from '../../../../components'
import { SlideControllerListener } from '../../utils'

const ShortsSection = () => {
    return (
        <div className='mt-20 w-[90%] m-auto' >
            <h1 className="section-title">EduShorts</h1>
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

export default ShortsSection
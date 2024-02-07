import React, { useEffect, useState } from 'react'
import Card from '../card'
import { SlideController, ViewAllLink } from '../../../../components'
import { SlideControllerListener } from '../../utils'
import ShortsServices from '../../services/ShortsServices'

const Services = new ShortsServices()

const ShortsSection = () => {
    const cardLimit = 5
    const [videos, setVideos] = useState(null)

    Services.handleSuccess = () => {
        setVideos(Services.responseBody.data)
    }

    useEffect(() => {
        Services.getAll()
    }, [])

    return (
        <div className='mt-20 w-[90%] m-auto' >
            <h1 className="section-title">EduShorts</h1>
            <div className="mt-6 flex gap-4 overflow-scroll pr-3 pb-3 items-center">
                {
                    videos && videos.map((video,i) => {
                        return <Card key={i}
                        id={video.id}
                        thumbnail={`${Services.storageUrl}/${video.thumbnail_path}`}
                        title={video.title}
                        />
                    })
                }
                {
                    videos && (videos.length > cardLimit && <ViewAllLink className='ml-4 w-max'/>)
                }
            </div>
            {
                videos && (videos.length > cardLimit && <SlideController className='mt-4'
                onLeftClick={SlideControllerListener.handleLeftClick}
                onRightClick={SlideControllerListener.handleRightClick}
                />)
            }
        </div>
    )
}

export default ShortsSection
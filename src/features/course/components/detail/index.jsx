import React, { useEffect, useState } from 'react'
import { BackNavigation } from '../../../../components'
import { useOutletContext } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import Menu from '../menu'
import Player from '../player'

const Detail = () => {
    const [course] = useOutletContext()
    const [params, setParams] = useSearchParams()
    const [video, setVideo] = useState(null)

    useEffect(() => {
        const video_id = params.get('video')
        setVideo(course.videos.filter(video => video.id == video_id)[0])
    }, [params])

    return (
        <>
        <BackNavigation/>
        {
            video ? <Player 
            video={video} 
            course={{
                title: course.title,
                total_videos: course.videos_count,
                video_index: course.videos.findIndex(v => v == video)
            }}
            /> : <Menu course={course}/>
        }
        </>
    )
}

export default Detail
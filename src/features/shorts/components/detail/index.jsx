import React, { useEffect, useRef, useState } from 'react'
import { BackNavigation, Icon } from '../../../../components'
import Video from '../video'
import ShortsServices from '../../services/ShortsServices'
import { useNavigate } from 'react-router'
import PlayIcon from '../../../../assets/play-fill.svg'

const Services = new ShortsServices()

const Detail = () => {
    const videoContainer = useRef(null)
    const videoRef = useRef([])
    const [videos, setVideos] = useState(null)
    const [videoPlayer, setVideoPlayer] = useState(null)
    const navigateTo = useNavigate()
    const id = location.pathname.split('/').reverse()[0]

    Services.handleSuccess = () => {
        setVideos(Services.responseBody.data)
        setVideoPlayer(Services.responseBody.data.map(data => {
            
        }))
    }

    const getCurrentVisibleVideo = () => {
        const gap = 10
        const currentVisibleVideo = {
            bounds: {
                height: 0,
                top: 0
            },
            index: null
        }

        for (let i = 0; i < videoRef.current.length; i++) {
            currentVisibleVideo.bounds.height = videoRef.current[i].clientHeight
            const currentVideoTopPosition = currentVisibleVideo.bounds.height * i
            
            if ((scrollY + gap) >= currentVideoTopPosition && (scrollY + gap) <= currentVideoTopPosition + currentVisibleVideo.bounds.height) {
                currentVisibleVideo.bounds.top = currentVideoTopPosition
                currentVisibleVideo.index = i
                break
            }
        }

        return currentVisibleVideo
    }

    const onVideoClick = (i) => {
        if (videoRef.current[i].paused) {
            videoRef.current[i].play()
        } else {
            videoRef.current[i].pause()
        }
    }

    const pauseElapsedVideo = video => {
        video.currentTime = 0
        video.pause()
    }

    const playVideo = video => {
        video.muted = false
        video.play()
    }

    useEffect(() => {
        Services.getById(id)

        const onScrollEnd = e => {
            const currentVisibleVideo = getCurrentVisibleVideo()

            if (scrollY <= currentVisibleVideo.bounds.top + (currentVisibleVideo.bounds.height/2)) {
                window.scrollTo({
                    top: currentVisibleVideo.bounds.top,
                    behavior: 'smooth'
                })
                playVideo(videoRef.current[currentVisibleVideo.index])

            } else {
                window.scrollTo({
                    top: currentVisibleVideo.bounds.top + currentVisibleVideo.bounds.height,
                    behavior: 'smooth'
                })

                if (currentVisibleVideo.index > 0) {
                    pauseElapsedVideo(videoRef.current[currentVisibleVideo.index - 1])
                }
            }
        }

        window.addEventListener('scrollend', onScrollEnd)
        
        return () => {
            window.removeEventListener('scrollend', onScrollEnd);
        }
    }, []);
    
    return (
        <div className='bg-[radial-gradient(#557C55,#3C463C)] pb-12' >
            <BackNavigation handleBackNavigation={() => navigateTo('/app')}/>
            {
                videos && <div className="flex flex-col w-max justify-center items-center mt-14 m-auto" ref={videoContainer}>
                    {
                        videos.map((video,i) => (
                            <div className='relative'>
                            {
                                videoRef.current[i] && (videoRef.current[i].paused && <div className='absolute top-0 right-0 left-0 bottom-0 w-max h-max m-auto'>
                                    <Icon src={PlayIcon} className='text-[rgba(255,255,255,.5)]' width={120}/>
                                </div>)
                            }
                            <Video src={
                                `${Services.storageUrl}/${video.video_path}`
                            } key={i} ref={el => videoRef.current[i] = el} 
                            onClick={() => onVideoClick(i)}
                            />
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Detail
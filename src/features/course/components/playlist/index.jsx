import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import ChevronDown from '../../../../assets/chevron-down.svg'
import ClockIcon from '../../../../assets/clock-history.svg'
import { Button, Icon } from '../../../../components'
import { useSearchParams } from 'react-router-dom'

const Playlist = ({
    course_title,
    videos,
    className
}) => {
    const [expanded, setExpanded] = useState(false)
    const [params, setParams] = useSearchParams()

    return (
        <div className={`${className} bg-white border border-black`}>
            <header className='font-semibold text-xl p-6 border-b border-black'>{course_title}</header>
            <div className="p-6 w-full">
                <Disclosure>
                    {
                        videos.map((video,i) => (
                            <div key={i}>
                            <Disclosure.Button className="py-4 w-full border-b border-[#bebebe] flex items-center justify-between" onClick={() => setExpanded(!expanded)}>
                                <div className="flex items-center gap-3">
                                    <div className="number-circle">{i+1}</div>
                                    <p className="font-bold font-secondary">{video.title}</p>
                                </div>
                                <Icon className={expanded ? 'animate-rotate':'animate-rotate-reverse'} src={ChevronDown} width={18}/>
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-4 py-5">
                                <div className="flex gap-2 items-center mb-4">
                                    <Icon src={ClockIcon} width={20}/>
                                    <p>± {Math.round(video.duration / 60)} menit</p>
                                </div>
                                <Button 
                                onClick={() => setParams(params => {
                                    params.set("video", video.id)
                                    return params
                                })}>Tonton</Button>
                            </Disclosure.Panel>
                            </div>
                        ))
                    }
                </Disclosure>
            </div>
        </div>
    )
}

export default Playlist
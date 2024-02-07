import React, { useState } from 'react'
import { Button, Icon } from '../../../../components'
import { ApiServices } from '../../../../services'
import ChevronRight from '../../../../assets/chevron-right.svg'

const Player = ({
    video,
    course
}) => {
    const API = new ApiServices()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='h-screen w-screen bg-[radial-gradient(#557C55,#3C463C)] flex'>
            <aside className={`fixed w-[400px] -left-[200%] h-full lg:static lg:max-w-[400px] bg-white border-r border-black pl-7 pr-20 pt-28 pb-5 flex flex-col justify-between z-10 ${isOpen ? 'animate-aside-open':'animate-aside-close'}`}>
                <div>
                    <p className="text-gray-400 uppercase font-semibold text-sm">{course.title}</p>
                    <p className="font-secondary font-bold text-4xl max-w-48 mt-4 mb-8">{video.title}</p>
                    <p className="font-light">{video.description}</p>
                </div>
                <div className="flex items-center justify-between gap-8">
                    <p className="font-secondary font-bold text-gray-400">{course.video_index + 1}/{course.total_videos}</p>
                    <div className="flex items-center gap-2">
                        <Button className='px-5 text-sm rounded-xl' type='btn-secondary'>Sebelumnya</Button>
                        <Button className='px-5 text-sm rounded-xl'>Selanjutnya</Button>
                    </div>
                </div>
            </aside>
            <div className="flex justify-center items-center w-full">
                <video src={`${API.storageUrl}/${video.video_path}`} className='w-full' controls autoPlay/>
            </div>
            <div className="lg:hidden absolute rounded-full bg-green-contrast w-16 aspect-square bottom-4 left-4 flex justify-center items-center text-white"
            onClick={() => setIsOpen(true)}
            >
                <Icon src={ChevronRight} width={20}/>
            </div>
        </div>
    )
}

export default Player
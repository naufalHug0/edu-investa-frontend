import React from 'react'
import { Button, Footer, Icon } from '../../../../components'
import Playlist from '../playlist'
import DotBg from '../../../../assets/dot-bg.png'
import ClockIcon from '../../../../assets/clock-history.svg'


const Menu = ({
    course
}) => {
    return (
        <div className="bg-green-semilight pt-36">
            <div  className='w-full h-[500px] bg-cover bg-center flex justify-center p-8 pt-16 flex-col' 
            style={{ 
                backgroundImage: `url(${DotBg})`
            }}
            >
                <div className="bg-green-semilight w-full p-6 sm:px-8 sm:py-10 rounded-lg sm:rounded-3xl h-max">
                    <p className='text-xs sm:text-base'>Kursus</p>
                    <p className="font-secondary text-green-dark font-bold text-xl sm:text-4xl py-2 sm:py-5">{course.title}</p>
                    <p className='font-light text-sm sm:text-lg'>{course.description}</p>
                    <Button className='mt-16 w-full sm:w-max'>Mulai</Button>
                </div>
                <div className="border-[1.5px] translate-y-14 border-black flex justify-center items-center py-5 sm:py-8 mt-5 bg-green-semilight">
                    <div className="flex gap-3 sm:gap-5 items-center">
                        <Icon src={ClockIcon} width={35}/>
                        <p className='text-lg sm:text-2xl'>{course.videos_count} <span className="font-bold">Episode{course.videos_count > 1 && 's'}</span></p>
                    </div>
                </div>
            </div>
            <div className="p-8 mt-8 sm:mt-40">
                <Playlist 
                course_title={course.title}
                videos={course.videos}
                />
            </div>
            <Footer className='mt-8'/>
        </div>
    )
}

export default Menu
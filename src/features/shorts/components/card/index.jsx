import React from 'react'
import TestThumbnail from '../../../../assets/thumbnail-shorts.jpg'

const Card = () => {
    return (
        <div className='min-w-[226px] overflow-hidden sm:min-w-[250px] aspect-[226/332] rounded-xl relative after:content-[""] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-gradient-to-b after:from-[rgba(0,0,0,0)] after:to-[rgba(0,0,0,.5)] px-4 cursor-pointer' style={{ 
            backgroundImage: `url(${TestThumbnail})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className="absolute z-10 bottom-8">
                {/* max 32 length */}
                <p className='text-white font-semibold leading-snug'>MINDSET BUAT SUKSES❗️❗️</p>
                <div className="edu-category-danger w-max mt-2 text-xs rounded-[4px] px-2 sm:text-base sm:rounded-md sm:px-[10px]">EduShorts</div>
            </div>
        </div>
    )
}

export default Card
import React, { forwardRef } from 'react'

const Video = forwardRef(({
    src,
    className,
    ...rest
}, ref) => {
    return (
        <div className={` ${className} video-shorts-height aspect-[9/16]`} >
            <video src={src} ref={ref} className='w-full h-full' {...rest}/>
        </div>
    )
})

export default Video
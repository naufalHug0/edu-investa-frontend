import React from 'react'
import DotBg from '../../assets/dot-bg.png'
import GraphIcon from '../../assets/graph-icon.png'
import { StartNowCard } from '../../features/invest-simulator/components'

const Hero = () => {
    return (
        <div className="w-full h-[400px] md:h-[340px] mt-[200px] flex items-center md:justify-between px-8 lg:px-16 relative" style={{ backgroundImage: `url(${DotBg})` }}>
            <StartNowCard className='justify-self-start absolute -top-10 md:static right-8 left-8'/>
            <img src={GraphIcon} alt="graph-icon" width={250} className='justify-self-end absolute right-8 -bottom-16 md:static'/>
        </div>
    )
}

export default Hero
import React from 'react'
import CoinIcon from '../../../../assets/coin-icon.png'

const Card = ({
    icon,
    title,
    width
}) => {
    return (
        <div className='relative rounded-md border-[7px] border-green-dark bg-green-contrast flex justify-center items-center pt-8 pb-14 min-w-[300px] max-w-[377px] aspect-[377/300] flex-col px-8'>
            <img src={icon} alt="icon" className='w-40 h-40'/>
            <img src={title} width={width} className='mt-5'/>
            <p className='mt-5 text-white font-light text-center text-xs'>Memberikan perlindungan dari pengurangan xp saat salah jawaban selama 20 detik</p>
            <div className="px-8 py-3 border-[6px] rounded-full bg-gradient-to-l gradient-green border-green-dark absolute -bottom-10">
                <div className="flex gap-3 items-center">
                    <p className="text-3xl font-bold font-secondary text-white">200</p>
                    <img src={CoinIcon} className='w-8'/>
                </div>
            </div>
        </div>
    )
}

export default Card
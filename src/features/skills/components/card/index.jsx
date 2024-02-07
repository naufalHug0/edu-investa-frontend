import React from 'react'
import CoinIcon from '../../../../assets/coin-icon.png'

const Card = ({
    icon,
    title,
    width,
    description,
    price,
    quantity,
    showPrice = true,
    ...rest
}) => {
    return (
        <div className='hover:scale-[1.01] transition relative rounded-md border-[7px] border-green-dark bg-green-contrast flex justify-center items-center pt-8 pb-14 min-w-[300px] max-w-[377px] aspect-[377/300] flex-col px-8 select-none cursor-pointer h-[390px] max-h-[390px]' {...rest}>
            <img src={icon} alt="icon" className='w-40 h-40'/>
            <img src={title} width={width} className='mt-5'/>
            <p className='mt-5 text-white font-light text-center text-xs'>{description}</p>
            <div className="px-8 py-3 border-[6px] rounded-full bg-gradient-to-l gradient-green border-green-dark absolute -bottom-10">
                <div className="flex gap-3 items-center">
                    {
                        showPrice ? <>
                        <p className="text-3xl font-bold font-secondary text-white">{price}</p>
                        <img src={CoinIcon} className='w-8'/>
                        </> :
                        <p className="text-3xl font-bold font-secondary text-white">{quantity}x</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card
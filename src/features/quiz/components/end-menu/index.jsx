import React from 'react'
import Menu from '../menu'
import CoinIcon from '../../../../assets/coin-icon.png'
import { Icon } from '../../../../components'
import CheckIcon from '../../../../assets/check-circle-fill.svg'
import CloseIcon from '../../../../assets/x-circle-fill.svg'

const EndMenu = ({

}) => {
    return (
        <div className="bg-[#475353]">
            <div className="animate-fade-in flex justify-center items-center h-screen w-full">
            <Menu buttonAction='Kembali' className='flex justify-center items-center flex-col'>
                <h1 className='text-red-default text-stroke text-stroke-black font-bold text-4xl sm:text-6xl text-center'>GAME OVER!</h1>
                <div className="py-2 px-3 bg-gradient-to-l gradient-green flex items-center gap-[6px] rounded-md mt-3">
                    <p className="font-bold text-white text-xl">+ 10</p>
                    <img src={CoinIcon} width={22}/>
                </div>
                <div className="flex items-center gap-4 mt-5">
                    <div className="flex items-center gap-2">
                        <Icon src={CheckIcon} width={25} className='text-green-contrast'/>
                        <p className="font-bold text-green-contrast">20</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon src={CloseIcon} width={25} className='text-red-default'/>
                        <p className="font-bold text-red-default">5</p>
                    </div>
                </div>
            </Menu>
            </div>
        </div>
    )
}

export default EndMenu
import React from 'react'
import { Button } from '../../../../components'
import { useNavigate } from 'react-router'

const StartNowCard = ({
    className
}) => {
    const navigateTo = useNavigate()

    return (
        <div className={`px-6 py-7 rounded-md border border-black bg-white max-w-[420px] ${className}`}>
            <h1 className="font-bold text-stroke-black text-stroke-08 text-red-default text-2xl sm:text-3xl">Simulasi Investasi</h1>
            <p className='font-light mt-2 text-sm sm:text-base'>Yuk, rasakan pengalaman simulasi investasi menggunakan XP mu!</p>
            <Button className='mt-8 w-full' onClick={() => navigateTo('simulasi')}>Cobain Sekarang</Button>
        </div>
    )
}

export default StartNowCard
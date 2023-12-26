import React from 'react'
import ListOl from '../../../../assets/list-ol.svg'
import CoinIcon from '../../../../assets/coin-icon.png'
import { Button, Icon } from '../../../../components'
import { useNavigate } from 'react-router'

const Card = () => {
    const navigateTo = useNavigate()

    return (
        <div className='bg-green-light rounded-md py-4 px-5 border border-black shadow-default min-w-[320px] sm:min-w-[440px]'>
            <div className="edu-category-primary w-max">EduGames</div>
            {/* max 40 char */}
            <h1 className="mt-5 text-2xl font-bold text-stroke text-stroke-black text-red-default leading-[25px]">QUIZ : Manajemen Investasi & Portofolio</h1>
            <div className="flex items-center gap-3 mt-5">
                <Icon src={ListOl} width={20}/>
                <p className="font-bold">25 Pertanyaan</p>
            </div>
            <div className="flex items-center gap-3">
                <img src={CoinIcon} alt="coin-icon" width={20} />
                <p>Estimasi reward : </p>
                <div className="xp-label -ml-2">350 XP</div>
            </div>
            <Button type='btn-danger' onClick={() => navigateTo('quiz/2')}  className='w-full mt-12'>Mainkan</Button>
        </div>
    )
}

export default Card
import React from 'react'
import Menu from '../menu'
import ListOl from '../../../../assets/list-ol.svg'
import ClockHistory from '../../../../assets/clock-history.svg'
import { CancelButton, Icon } from '../../../../components'
import { useNavigate } from 'react-router'

const StartMenu = () => {
    const navigateTo = useNavigate()

    return (
        <div className="flex justify-center items-center h-screen w-full">
        <CancelButton onClick={() => navigateTo('/app')} className='absolute left-4 top-4'/>
        <Menu buttonAction='Mulai'>
            <h1 className='text-red-default text-stroke text-stroke-black font-bold text-4xl'>QUIZ : Manajemen Investasi & Portofolio</h1>
            <div className="edu-category-primary w-max mt-3">EduGames</div>
            <footer className="flex justify-between items-center mt-12 border-t border-black border-dashed pt-4">
                <div className="flex gap-5 items-center">
                    <div className="flex items-center gap-3">
                        <Icon src={ListOl} width={20}/>
                        <p className="font-bold">25 Pertanyaan</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Icon src={ClockHistory} width={20}/>
                        <p className="font-bold">3 menit 20 detik</p>
                    </div>
                </div>
                <div className="xp-label text-sm">350 XP</div>
            </footer>
        </Menu>
        </div>
    )
}

export default StartMenu
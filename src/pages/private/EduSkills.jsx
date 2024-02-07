import React, { useEffect } from 'react'
import { BackNavigation, Button } from '../../components'
import { Navigate, Route, Routes, useLocation, useNavigate, useOutletContext } from 'react-router'
import EnergyIcon from '../../assets/energy-icon.png'
import CoinIcon from '../../assets/coin-icon.png'
import {Inventory, Shop} from '../../features/skills/components'

const EduSkills = () => {
    const navigateTo = useNavigate()
    const handleBackNavigation = () => navigateTo('/app')
    const userData = useOutletContext()

    const location = useLocation()
    const currentSection = location.pathname.split('/').pop()

    useEffect(() => {
        scrollTo(0,0)
    }, [])

    return (
        <>
        <BackNavigation handleBackNavigation={handleBackNavigation}/>
            <div className="mt-28 m-auto w-[90%] mb-28">
                <div className="flex gap-1 sm:gap-2 items-center">
                    <h1 className='font-bold text-green-contrast text-stroke-black text-stroke sm:text-stroke-2 text-4xl sm:text-7xl'>EduSkills</h1>
                    <img src={EnergyIcon} alt="energy-icon" className='w-10 sm:w-16 sm:h-16'/>
                </div>
                <div className="flex items-center justify-between gap-3 mt-10">
                    <div className="flex items-center gap-3">
                        <Button type={currentSection == 'inventory' ? 'btn-section':'btn-section-active'} className='px-5' onClick={() => navigateTo('')}>Toko</Button>
                        <Button type={currentSection == 'inventory' ? 'btn-section-active':'btn-section'} className='px-5' onClick={() => navigateTo('inventory')}>Skill Saya</Button>
                    </div>
                    <div className="self-stretch px-3 bg-gradient-to-l gradient-green flex items-center gap-[6px] rounded-md">
                        <p className="font-bold text-white text-xl">{userData.total_xp}</p>
                        <img src={CoinIcon} width={22}/>
                    </div>
                </div>
                <div className="text-xs sm:text-base flex justify-center items-center rounded-md bg-red-default text-white font-semibold w-full text-center p-4 sm:p-5 mt-5">
                    Skills hanya dapat digunakan untuk satu kali 
                    permainan quiz. Kamu bisa membeli skills ini lebih dari satu kali
                </div>
                <Routes>
                    <Route index element={<Shop/>}/>
                    <Route path='inventory' element={<Inventory/>}/>
                    <Route path='*' element={<Navigate to='/app/edu-skills'/>}/>
                </Routes>
            </div>
        </>
    )
}

export default EduSkills
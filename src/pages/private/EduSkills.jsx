import React, { useEffect } from 'react'
import { BackNavigation, Button } from '../../components'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import EnergyIcon from '../../assets/energy-icon.png'
import { Card } from '../../features/skills/components'
import SkillIcon from '../../assets/skill-icon'
import SkillTitle from '../../assets/skill-title'

const EduSkills = () => {
    const navigateTo = useNavigate()
    const handleBackNavigation = () => navigateTo('/app')

    const powerUps = [
        { icon: SkillIcon.IMMUNITY, title: SkillTitle.IMMUNITY, width: 150 }, 
        { icon: SkillIcon.ERASER, title: SkillTitle.ERASER, width: 100 }, 
        { icon: SkillIcon.HALF, title: SkillTitle.HALF, width: 90 }, 
        { icon: SkillIcon.JEOPARDY, title: SkillTitle.JEOPARDY, width: 220 },
        { icon: SkillIcon.FLASH, title: SkillTitle.FLASH, width: 80 }
    ]

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
                <div className="flex items-center gap-3 mt-10">
                    <Button type={currentSection == 'inventory' ? 'btn-section':'btn-section-active'} className='px-5' onClick={() => navigateTo('')}>Toko</Button>
                    <Button type={currentSection == 'inventory' ? 'btn-section-active':'btn-section'} className='px-5' onClick={() => navigateTo('inventory')}>Skill Saya</Button>
                </div>
                <div className="flex justify-center items-center rounded-md bg-red-default text-white font-semibold w-full py-5 mt-5">
                    Skills hanya dapat digunakan untuk satu kali 
                    permainan quiz. Kamu bisa membeli skills ini lebih dari satu kali
                </div>
                <Routes>
                    <Route index element={
                        <>
                            <div className="grid mt-10 grid-cols-3 gap-x-12 gap-y-20">
                                {
                                    powerUps.map((powerUp,i) => <Card icon={powerUp.icon} key={i} title={powerUp.title} width={powerUp.width}/>)
                                }
                            </div>
                        </>
                    }/>
                    <Route path='inventory' element={
                        <p>OKE</p>
                    }/>
                </Routes>
            </div>
        </>
    )
}

export default EduSkills
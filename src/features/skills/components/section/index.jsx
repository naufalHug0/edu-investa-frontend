import React from 'react'
import EnergyIcon from '../../../../assets/energy-icon.png'
import SkillIcon from '../../../../assets/skill-icon'
import { Button } from '../../../../components'
import { useNavigate } from 'react-router'

const SkillsSection = () => {
    const powerUps = [
        SkillIcon.IMMUNITY,
        SkillIcon.ERASER,
        SkillIcon.HALF,
        SkillIcon.JEOPARDY
    ]

    const navigateTo = useNavigate()

    return (
        <div className='skill-section'>
            <div className="flex gap-1 sm:gap-2 items-center">
                <h1 className='font-bold text-green-contrast text-stroke-black text-stroke sm:text-stroke-2 text-4xl sm:text-7xl'>EduSkills</h1>
                <img src={EnergyIcon} alt="energy-icon" className='w-10 sm:w-16 sm:h-16'/>
            </div>
            <p className='font-light text-green-dark-mode mt-6 max-w-[90%] sm:max-w-[60%] text-center sm:text-base text-sm' >Tukarkan <span className="font-bold">XP</span> kamu dengan <span className="font-bold">Power-Ups</span> untuk menghadirkan pengalaman pembelajaran yang lebih seru. Gunakan <span className="font-bold">Power-Ups</span> ini saat mengerjakan <span className="font-bold">quiz</span>.</p>
            <div className="flex *:-ml-4 mt-6">
                {
                    powerUps.map((icon,i) => <img src={icon} key={i} alt="icon" className='w-20 h-20'/>)
                }
            </div>
            <Button type='btn-danger' className='mt-10' onClick={() => navigateTo('edu-skills')}>Kunjungi</Button>
        </div>
    )
}

export default SkillsSection
import React, { useState } from 'react'
import ArrowUpCircle from '../../../../assets/arrow-up-circle-fill.svg'
import ArrowDownCircle from '../../../../assets/arrow-down-circle-fill.svg'
import SkillIcon from '../../../../assets/skill-icon.js'
import { Icon } from '../../../../components'

const Skills = () => {
    const powerUps = [
        SkillIcon.IMMUNITY,
        SkillIcon.ERASER,
        SkillIcon.HALF,
        SkillIcon.JEOPARDY,
        SkillIcon.BOOST,
        SkillIcon.FLASH
    ]

    const [toggleSkill, setToggleSkill] = useState(false)

    return (
        <>
            <div className="bg-white rounded-xl px-8 py-5 flex justify-between items-center mt-8 gap-16 cursor-pointer select-none" onClick={() => setToggleSkill(true)}>
                <h1 className='font-bold text-xl text-green-contrast'>Skills</h1>
                <Icon src={ArrowUpCircle} width={30} className='text-green-contrast'/>
            </div>
            <div className={`bg-white rounded-xl px-5 sm:px-8 py-5 flex gap-2 w-[95%] sm:w-max sm:gap-5 justify-between sm:justify-center items-center opacity-0 translate-y-[200%] ${toggleSkill ? 'animate-swipe-up-skill':'animate-swipe-down-skill'}`}>
                {
                    powerUps.map((powerUp,i) => <img key={i} src={powerUp} className='w-8 sm:w-12 cursor-pointer'/>)
                }
                <Icon src={ArrowDownCircle} width={30} className='text-green-contrast cursor-pointer' onClick={() => setToggleSkill(false)}/>
            </div>
        </>
    )
}

export default Skills
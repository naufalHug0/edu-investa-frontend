import React, { useEffect, useState } from 'react'
import ArrowUpCircle from '../../../../assets/arrow-up-circle-fill.svg'
import ArrowDownCircle from '../../../../assets/arrow-down-circle-fill.svg'
import { Icon, Loader, LoadingSpinner } from '../../../../components'
import SkillServices from '../../services/SkillServices'
import createSkillsInstance from '../../utils/createSkillsInstance'
import { useSelector } from 'react-redux'

const Services = new SkillServices()

const Skills = () => {
    const [userSkills, setUserSkills] = useState([])
    const [showSkillLists, setShowSkillLists] = useState(false)
    const [isLoadingUserSkills, setIsLoadingUserSkills] = useState(true)

    Services.handleSuccess = () => {
        setUserSkills(
            Services.responseBody.data.map(data => {
                return createSkillsInstance(data)
            })
        )
        setIsLoadingUserSkills(false)
    }

    useEffect(() => {
        Services.getUserSkills()
    }, [])

    return (
        <>
            <div className="bg-white rounded-xl px-8 py-5 flex justify-between items-center mt-8 gap-16 cursor-pointer select-none" onClick={() => setShowSkillLists(true)}>
                <h1 className='font-bold text-xl text-green-contrast'>Skills</h1>
                <Icon src={ArrowUpCircle} width={30} className='text-green-contrast'/>
            </div>
            <div className={`bg-white rounded-xl px-5 sm:px-8 py-5 flex gap-2 w-[95%] sm:w-max sm:gap-5 justify-between sm:justify-center items-center opacity-0 translate-y-[200%] shadow-lg ${showSkillLists ? 'animate-swipe-up-skill':'animate-swipe-down-skill'}`}>
            <>
            <Loader isLoading={isLoadingUserSkills} loadingComponent={<LoadingSpinner/>}>
                {
                    userSkills && <SkillLists userSkills={userSkills} />
                }
            </Loader>
            <Icon src={ArrowDownCircle} width={30} className='text-green-contrast cursor-pointer' onClick={() => setShowSkillLists(false)}/>
            </>
            </div>
        </>
    )
}

const SkillLists = ({userSkills}) => {
    const { allow_activate_skill } = useSelector(state => state.skill)
    
    if (userSkills.length > 0) {
        return userSkills.map((skill,i) => <img key={i} src={`${Services.storageUrl}/${skill.logo}`} className='w-8 sm:w-12 cursor-pointer' 
        onClick={() => {
            if (allow_activate_skill) skill.activate()
        }}
        />)
    }

    return <p className='text-green-contrast'>No Skills</p>
}

export default Skills
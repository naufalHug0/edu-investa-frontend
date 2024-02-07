import React, { useEffect, useState } from 'react'
import {SkillServices} from '../../services'
import { Loader, LoadingSpinner } from '../../../../components'
import Card from '../card'
import createSkillsInstance from '../../utils/createSkillsInstance'

const Services = new SkillServices()

const Inventory = () => {
    const [skills, setSkills] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    Services.handleSuccess = () => {
        setSkills(
            Services.responseBody.data.map(data => {
                return createSkillsInstance(data)
            })
        )
        setIsLoading(false)
    }

    useEffect(() => {
        Services.getUserSkills()
    }, [])

    return (
        <div className="flex mt-10 flex-wrap justify-center gap-x-12 gap-y-20">
            <Loader isLoading={isLoading} loadingComponent={<LoadingSpinner/>}>
                {
                    skills && skills.length > 0 ? skills.map((skill,i) => <Card 
                    icon={`${Services.storageUrl}/${skill.logo}`} 
                    key={i} 
                    price={skill.price}
                    description={skill.description} 
                    title={skill.title_image.image} 
                    width={skill.title_image.width} 
                    showPrice={false}
                    quantity={skill.quantity}
                    onClick={() => handleItemClick(skill.id, skill.price)}
                    />) 
                    :
                    <div className='flex justify-center items-center h-[40vh] font-semibold text-green-contrast text-4xl font-secondary mt-8'>Belum ada skills</div>
                }
            </Loader>
        </div>
    )
}

export default Inventory
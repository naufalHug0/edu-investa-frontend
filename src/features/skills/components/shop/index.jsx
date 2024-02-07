import React, { useEffect, useState } from 'react'
import Card from '../card'
import SkillServices from '../../services/SkillServices'
import createSkillsInstance from '../../utils/createSkillsInstance'
import { useOutletContext } from 'react-router'
import { ModalReduxController } from '../../../../services'
import { ModalMessage } from '../../../../data'
import { Loader, LoadingSpinner } from '../../../../components'

const Services = new SkillServices()

const Shop = () => {
    const [skills, setSkills] = useState([])
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
        Services.getAll()
    }, [])

    const buyItem = id => {
        ModalReduxController.hide()

        Services.handleSuccess = () => {
            ModalReduxController.show({
                ...ModalMessage.action.success.shop.buy,
                options: [
                    { title: 'Lanjut', type: 'primary', url: 'inventory' }
                ]
            })
        }

        Services.handleForbiddenError = () => {
            ModalReduxController.show({
                ...ModalMessage.error.shop.not_enough_xp,
                options: [
                    { title: 'Kembali', type: 'danger' }
                ]
            })
        }

        Services.buySkill(id)
    }

    const handleItemClick = (id) => {
        ModalReduxController.show({
            ...ModalMessage.confirm.shop.buy,
            options: [
                { title: 'Beli', type: 'primary', action: () => buyItem(id) },
                { title: 'Batalkan', type: 'danger' }
            ]
        })
    }


    return (
        <div className="flex mt-10 flex-wrap justify-center gap-x-12 gap-y-20">
            <Loader isLoading={isLoading} loadingComponent={<LoadingSpinner/>}>
                {
                    skills && 
                    skills.map((skill,i) => <Card 
                    icon={`${Services.storageUrl}/${skill.logo}`} 
                    key={i} 
                    price={skill.price}
                    description={skill.description} 
                    title={skill.title_image.image} 
                    width={skill.title_image.width} 
                    onClick={() => handleItemClick(skill.id, skill.price)}
                    />)
                }
            </Loader>
        </div>
    )
}

export default Shop
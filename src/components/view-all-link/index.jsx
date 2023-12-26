import React from 'react'
import Icon from '../icon'
import ChevronRight from '../../assets/chevron-right.svg'

const ViewAllLink = ({
    className
}) => {
    return (
        <div className={`view-all-wrapper ${className}`}>
            <p className='font-bold text-green-contrast select-none'>Lihat Semua</p>
            <div className='icon-button-primary'>
                <Icon src={ChevronRight} width={20}/>
            </div>
        </div>
    )
}

export default ViewAllLink
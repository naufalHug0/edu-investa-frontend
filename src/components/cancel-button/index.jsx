import React from 'react'
import Icon from '../icon'
import Close from '../../assets/x-lg.svg'

const CancelButton = ({ className, ...rest }) => {
    return (
        <div className={`icon-button-danger ${className}`} {...rest}>
            <Icon src={Close} width={20}/>
        </div>
    )
}

export default CancelButton
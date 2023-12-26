import React from 'react'
import Icon from '../icon'
import ChevronLeft from '../../assets/chevron-left.svg'
import ChevronRight from '../../assets/chevron-right.svg'

const SlideController = ({ 
    className, 
    onRightClick, 
    onLeftClick
}) => {
    return (
        <div className={`slide-controller ${className}`}>
            <div className="slide-controller-item" onClick={onLeftClick}>
                <Icon src={ ChevronLeft } width={20}/>
            </div>
            <div className="slide-controller-item disabled" onClick={onRightClick}>
                <Icon src={ ChevronRight } width={20}/>
            </div>
        </div>
    )
}

export default SlideController
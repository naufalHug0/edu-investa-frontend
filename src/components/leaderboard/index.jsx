import React, { useEffect, useState } from 'react'
import GoldMedal from '../../assets/gold-medal-icon.png'
import SilverMedal from '../../assets/silver-medal-icon.png'
import BronzeMedal from '../../assets/bronze-medal-icon.png'
import CoinIcon from '../../assets/coin-icon.png'
import QuestionIcon from '../../assets/question-circle-fill.svg'
import Icon from '../icon'
import { ModalReduxController, XpServices } from '../../services'
import ModalMessage from '../../data/ModalMessage'

const XP = new XpServices()

const Leaderboard = ({
    user_xp
}) => {
    const [xps, setXps] = useState([])

    XP.handleSuccess = () => {
        setXps(XP.responseBody.data)
    }

    useEffect(() => {
        XP.getAll()
    }, [])

    const showInfo = () => {
        ModalReduxController.show({
            ...ModalMessage.info.leaderboard_xp,
            options: [
                { title: 'Tutup', type: 'primary' }
            ]
        })
    }
    
    return (
        <div className='w-[90%] m-auto'>
            <h1 className="section-title">Leaderboard Pekan ini!</h1>
            {
                xps && <div className="leaderboard mt-6">
                {
                    xps.map((xp, i) => {
                        return <div className={`leaderboard-row ${i < xps.length - 1 ? 'border-b':''}`} key={i}>
                            <TableRow index={i} username={xp.users.username} xp={xp.total_xp}/>
                        </div>
                    })
                }
                </div>
            }
            <div className="mt-2 border border-black rounded-md flex items-center py-4 px-5">
                <div className="font-bold font-secondary text-sm sm:text-lg m-auto">XP Kamu :&nbsp;
                    <div className="inline-flex items-center gap-2">
                        <p className="font-secondary font-bold text-right text-sm sm:text-lg">{user_xp ? user_xp : 0}</p>
                        <img src={CoinIcon} className='w-5'/>
                    </div>
                </div>
                <Icon src={QuestionIcon} width={20} className='text-green-contrast cursor-pointer' onClick={showInfo}/>
            </div>
        </div>
    )
}

const TableRow = ({
    index,
    xp,
    username
}) => {
    return (
        <>
            <div className="flex items-center gap-4">
                { getBadge(index+1) }
                <p className="font-secondary font-bold text-sm sm:text-base">{username}</p>
            </div>
            <div className="flex items-center gap-3">
                <p className="font-secondary font-bold text-right text-sm sm:text-base">{xp.toLocaleString()}</p>
                <img src={CoinIcon} className='w-5'/>
            </div>
        </>
    )
}

const getBadge = (rank) => {
    let src = ''
    switch (rank) {
        case 1:
            src = GoldMedal
            break;
        case 2:
            src = SilverMedal
            break;
        case 3:
            src = BronzeMedal
            break;
        default:
            return <div className='number-circle'>{rank}</div>
    }
    return <img src={src} className='w-9'/>
}

export default Leaderboard
import React, { useEffect, useState } from 'react'
import { InvestmentServices } from '../../services'
import InvestmentPurchaseCard from '../investment-purchase-card'
import { useOutletContext } from 'react-router'
import CoinIcon from '../../../../assets/coin-icon.png'

const Services = new InvestmentServices()

const UserInvestment = () => { 
    const [userInvestment, setUserInvesment] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const userData = useOutletContext()

    Services.handleSuccess = () => {
        setUserInvesment(Services.responseBody.data)
        setIsLoading(false)
    }

    useEffect(() => {
        Services.getUserInvestment()
    }, [])

    if (!isLoading && userInvestment.length == 0) {
        return (
        <>
        <div className="py-3 px-4 bg-gradient-to-l gradient-green flex items-center gap-[6px] rounded-md w-max mb-5">
            <p className="font-bold text-white text-xl font-secondary">XP Kamu : {userData.total_xp}</p>
            <img src={CoinIcon} width={22}/>
        </div>
        <InvestmentPurchaseCard/>
        </>
        )
    }

    return (
        <div>UserInvestment</div>
    )
}

export default UserInvestment
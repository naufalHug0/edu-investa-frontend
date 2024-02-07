import React from 'react'
import RiskProfileDropdown from '../risk-profile-dropdown'

const InvestmentPurchaseCard = () => {
    return (
        <div className='px-5 py-6 shadow-default rounded border border-slate-500'>
            <p className="text-2xl mb-4 font-bold text-green-contrast">Beli Edu-Reksadana</p>
            <RiskProfileDropdown/>
            
        </div>
    )
}

export default InvestmentPurchaseCard
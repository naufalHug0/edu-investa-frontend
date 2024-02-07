import React, { Fragment, useEffect, useState } from 'react'
import { InvestmentServices } from '../../services'
import { Loader, LoadingSpinner } from '../../../../components'

const Services = new InvestmentServices()

const RiskProfileDropdown = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [riskProfiles, setRiskProfiles] = useState()
    const [selected, setSelected] = useState(null)

    Services.handleSuccess = () => {
        setRiskProfiles(Services.responseBody.data)
        setSelected(Services.responseBody.data[0])
        setIsLoading(false)
    }

    useEffect(() => {
        Services.getRiskProfiles()
    }, [])

    return (
        <Loader isLoading={isLoading} loadingComponent={<LoadingSpinner/>}>
            <p className="mb-2">Profil Risiko</p>
            {
            riskProfiles && <select className='relative w-full cursor-default rounded-lg bg-white py-4 pl-5 pr-10 text-left border border-slate-500 shadow-default focus:outline-none appearance-none sm:text-sm' onChange={e => setSelected(e.target.value)}>
                {
                    riskProfiles.map(risk => <option key={risk.id} value={risk.id}>{risk.name}</option>)
                }
            </select>
            }
        </Loader>
    )
}

export default RiskProfileDropdown
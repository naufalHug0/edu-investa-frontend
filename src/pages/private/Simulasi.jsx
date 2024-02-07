import React, { useEffect, useState } from 'react'
import {BackNavigation, Button, Loader, LoadingSpinner} from '../../components'
import { Navigate, Route, Routes, useNavigate } from 'react-router'
import { About, LineChart, UserInvestment } from '../../features/invest-simulator/components'
import {InvestmentServices} from '../../features/invest-simulator/services'

const Services = new InvestmentServices()

const Simulasi = () => {
    const navigateTo = useNavigate()
    const handleBackNavigation = () => navigateTo('/app')
    const currentSection = location.pathname.split('/').pop()
    const [assetValues, setAssetValue] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    Services.handleSuccess = () => {
        setAssetValue(Services.responseBody.data)
        setIsLoading(false)
    }

    useEffect(() => {
        Services.getAssetValueChanges()
    }, [])
    console.log(assetValues)

    return (
        <>
            <BackNavigation handleBackNavigation={handleBackNavigation}/>
            <div className="my-24 px-6 sm:px-12">
                <div className="grid py-5 overflow-x-scroll gap-8 grid-cols-[repeat(3,minmax(414px,1fr))]">
                    <Loader isLoading={isLoading} loadingComponent={<LoadingSpinner/>}>
                        {
                            assetValues && assetValues.map(asset => <LineChart key={asset.id} title={`Grafik ${asset.name} Pekan Ini`} data={asset}/>)
                        }
                    </Loader>
                </div>
                <div className="flex items-center gap-3 mt-10 mb-8">
                    <Button type={currentSection == 'lists' ? 'btn-section':'btn-section-active'} className='px-5' onClick={() => navigateTo('')}>Tentang Simulasi Investasi</Button>
                    <Button type={currentSection == 'lists' ? 'btn-section-active':'btn-section'} className='px-5' onClick={() => navigateTo('lists')}>Investasi Saya</Button>
                </div>
                <div className='border-t border-b border-slate-500 py-6'>
                    <Routes>
                        <Route index element={<About/>}/>
                        <Route path='lists' element={<UserInvestment/>}/>
                        <Route path='*' element={<Navigate to=''/>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Simulasi
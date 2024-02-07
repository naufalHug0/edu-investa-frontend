import React from 'react'
import { Route, Routes } from 'react-router'
import { Detail } from '../../features/shorts/components'

const EduShorts = () => {
    return (
        <Routes>
            <Route index path='/' element={<p>All</p>}/>
            <Route path=':id' element={<Detail/>}/>
        </Routes>
    )
}

export default EduShorts
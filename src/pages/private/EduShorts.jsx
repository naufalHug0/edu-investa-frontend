import React from 'react'
import { Route, Routes } from 'react-router'

const EduShorts = () => {
    return (
        <Routes>
            <Route index path='/' element={<p>All</p>}/>
            <Route path=':id' element={<p>Detail</p>}/>
        </Routes>
    )
}

export default EduShorts
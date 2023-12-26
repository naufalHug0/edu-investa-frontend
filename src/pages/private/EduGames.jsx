import React from 'react'
import { Route, Routes } from 'react-router'
import { StartMenu, EndMenu, Play } from '../../features/quiz/components'
import { NotFound } from '../public'

const EduGames = () => {
    return (
        <Routes>
            <Route path=':id' element={<StartMenu/>} />
            <Route path='playing/:id' element={<Play/>} />
            <Route path='end/:id' element={<EndMenu/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    )
}



export default EduGames
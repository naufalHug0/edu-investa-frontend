import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { StartMenu, EndMenu, Play } from '../../features/quiz/components'
import { NotFound } from '../public'
import QuizIdGuard from '../../features/quiz/components/id-guard'
import QuizPlayGuard from '../../features/quiz/components/play-guard'

const EduGames = () => {
    return (
        <Routes>
            <Route path='/*' element={<QuizIdGuard/>}>
                <Route path=':id' element={<StartMenu/>} />
                <Route path='/*' element={<QuizPlayGuard/>}>
                    <Route path='playing/:id' element={<Play/>} />
                    <Route path='end/:id' element={<EndMenu/>} />
                </Route>
            </Route>
            <Route path='*' element={<Navigate to={'/app'}/>} />
        </Routes>
    )
}



export default EduGames
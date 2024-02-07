import React from 'react'
import { CourseIdGuard, Detail } from '../../features/course/components'
import { Route, Routes } from 'react-router'

const EduCourse = () => {
    return (
        <Routes>
            <Route path='/:id' element={<CourseIdGuard/>}>
                <Route index element={<Detail/>}/>
            </Route>
        </Routes>
    )
}

export default EduCourse
import React from 'react'
import { LoginForm, RegisterForm } from '../../features/authentication/components'
import { Navigate, Route, Routes } from 'react-router'
import { AuthLayout } from '../../layouts'

const Auth = () => {
    return (
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/register' element={<RegisterForm/>}/>
                <Route path='*' element={<Navigate to='login'/>}/>
            </Route>
        </Routes>
    )
}

export default Auth
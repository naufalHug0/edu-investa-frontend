import React from 'react'
import { Navigate, Outlet } from 'react-router'

const isAuthenticated = true

const PrivateRoute = () => {
    return isAuthenticated ? <Outlet/> : <Navigate to='/auth/login'/>
}

export default PrivateRoute
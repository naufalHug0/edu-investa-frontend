import React from 'react'
import { Navigate, Outlet } from 'react-router'

const isAuthenticated = true

const PublicRoute = () => {
    return isAuthenticated ? <Navigate to='/app'/> : <Outlet/>
}

export default PublicRoute
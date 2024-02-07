import React from 'react'
import { Navigate, Outlet } from 'react-router'
import {AuthServices} from '../../services'

const Auth = new AuthServices()
const isAuthenticated = Auth.isAuthenticated()

const PublicRoute = () => {
    return isAuthenticated ? <Navigate to='/app'/> : <Outlet/>
}

export default PublicRoute
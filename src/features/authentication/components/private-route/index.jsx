import React from 'react'
import { Navigate, Outlet } from 'react-router'
import {AuthServices} from '../../services'

const Auth = new AuthServices()
const isAuthenticated = Auth.isAuthenticated()

const PrivateRoute = () => {
    return isAuthenticated ? <Outlet/> : <Navigate to='/auth/login'/>
}

export default PrivateRoute
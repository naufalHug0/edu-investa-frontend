import {ApiServices} from "../../../services";

export default class AuthServices extends ApiServices {
    login ({ username, password }) {
        this.fetchData(this.axiosInstance.post('auth/login',{
            username, 
            password
        }))
    }

    register ({
        name,
        username,
        email,
        password
    }) {
        this.fetchData(this.axiosInstance.post('auth/register',{
            name,
            username,
            email,
            password
        }))
    }

    me () {
        this.handleForbiddenError = () => {
            this.removeBearerToken()
        }
        
        this.fetchData(this.axiosInstance.get('auth/me'))
    }

    isAuthenticated() {
        if (sessionStorage.getItem('token') == null) {
            return false
        }

        this.handleServerError = () => {
            this.removeBearerToken()
        }

        this.fetchData(this.axiosInstance.get('auth/me'))

        return !this.isError
    }

    storeToken(token) {
        sessionStorage.setItem('token', token)
    }

    logout() {
        this.fetchData(this.axiosInstance.get('auth/logout'))

        this.removeBearerToken()
    }

    reset_password({ 
        old_password,
        new_password,
        confirm_new_password
    }) {
        this.fetchData(this.axiosInstance.patch('auth/reset_password', { 
            old_password,
            new_password,
            confirm_new_password
        }))
    }

    edit_profile({ 
        name,
        username,
        email
    }) {
        this.fetchData(this.axiosInstance.patch('auth/me',{ name, username, email }))
    }
}
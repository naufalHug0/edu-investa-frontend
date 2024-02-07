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
}
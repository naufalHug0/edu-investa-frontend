import React, { useState } from 'react'
import { Button, InputText } from '../../../../components'
import { Link } from 'react-router-dom'
import { AuthServices } from '../../services'

const Services = new AuthServices()

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [invalid, setInvalid] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleLogin = () => {
        Services.handleUnauthorizedError = () => {
            setInvalid(true)
            setErrorMessage(Services.errors.message)
        }
    
        Services.handleSuccess = () => {
            Services.storeToken(Services.responseBody.data.access_token)
            setInvalid(false)
            location.href = '/app'
        }

        Services.login({ username, password })
    }

    return (
        <div className='max-lg:h-screen max-lg:flex justify-center items-center flex-col'>
            <div className='w-full'>
            <h1 className='text-green-light text-stroke-black text-stroke font-extrabold text-2xl sm:text-3xl text-center'>Masuk ke <span className="text-green-primary">EduInvesta</span></h1>
            <InputText 
            className={`mt-16 w-full`} 
            placeholder='Username' 
            errorMessage={errorMessage}
            isInvalid={invalid}
            onChange={e => setUsername(e.target.value)}
            />
            <InputText 
            className={`mt-4 w-full`}
            type='password'
            placeholder='Password'
            errorMessage={errorMessage} 
            isInvalid={invalid}
            onChange={e => setPassword(e.target.value)}
            />
            <Link className='self-end inline-block mt-4 font-bold text-sm text-green-primary'>Forgot Password?</Link>
            <Button className='mt-14 w-full' onClick={handleLogin}>Masuk</Button>
            <p className='inline-block mt-4 text-sm text-slate-400'>Belum punya akun? <Link className='text-green-primary font-bold underline' to='/auth/register' >Gabung Sekarang</Link></p>
            </div>
        </div>
    )
}

export default LoginForm
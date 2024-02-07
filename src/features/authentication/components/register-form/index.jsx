import React, { useEffect, useState } from 'react'
import { Button, InputText } from '../../../../components'
import { Link } from 'react-router-dom'
import { AuthServices } from '../../services'
import { ModalReduxController } from '../../../../services'
import {ModalMessage} from '../../../../data'

const Services = new AuthServices()

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [invalid, setInvalid] = useState(false)
    const [errors, setErrors] = useState({})

    const inputProps = [
        {
            errorMessage: errors?.name,
            placeholder: 'Nama',
            onChange: e => setName(e.target.value)
        },
        {
            errorMessage: errors?.email ,
            placeholder: 'Email',
            onChange: e => setEmail(e.target.value)
        },
        {
            errorMessage: errors?.username ,
            placeholder: 'Username',
            onChange: e => setUsername(e.target.value)
        },
        {
            type: 'password',
            errorMessage: errors?.password ,
            placeholder: 'Password',
            onChange: e => setPassword(e.target.value)
        },
    ]

    useEffect(() => {
        setErrors(Services.errors)
    }, [invalid])
    
    const handleRegister = () => {
        setInvalid(false)
        setErrors({})

        Services.register({ name, username, email, password })
    
        Services.handleSuccess = () => {
            ModalReduxController.show({
                ...ModalMessage.register.success,
                options: [
                { title: 'Lanjut', type: 'primary', url: '/auth/login' }
                ]
            })
        }
    
        Services.handleBadRequestError = () => {
            setInvalid(true)
        }
    }

    return (
        <div className='max-lg:h-screen max-lg:flex justify-center items-center flex-col'>
            <div className='w-full'>
                <h1 className='text-green-light text-stroke-black text-stroke font-extrabold text-2xl sm:text-3xl text-center'>Gabung ke <span className="text-green-primary">EduInvesta</span></h1>
                {
                    inputProps.map((props,i) => {
                        return <InputText 
                        key={i}
                        className={`${i > 0 ? 'mt-4':'mt-16'} w-full`} 
                        isInvalid={invalid}
                        {...props}
                        />
                    })
                }
                <Button className='mt-14 w-full' onClick={handleRegister}>Gabung</Button>
                <p className='inline-block mt-4 text-sm text-slate-400'>Sudah punya akun? <Link className='text-green-primary font-bold underline' to='/auth/login' >Masuk</Link></p>
            </div>
        </div>
    )
}

export default RegisterForm
import React from 'react'
import { Button, Input } from '../../../../components'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return (
        <>
            <h1 className='text-green-light text-stroke-black text-stroke font-extrabold text-3xl text-center'>Gabung ke <span className="text-green-primary">EduInvesta</span></h1>
            <Input placeholder='Nama' className='mt-16 w-full' />
            <Input placeholder='Email' className='mt-4 w-full' />
            <Input placeholder='Username' className='mt-4 w-full' />
            <Input type='password' placeholder='Password' className='mt-4 w-full'/>
            <Button className='mt-14 w-full'>Gabung</Button>
            <p className='inline-block mt-4 text-sm text-slate-400'>Sudah punya akun? <Link className='text-green-primary font-bold underline' to='/auth/login' >Masuk</Link></p>
        </>
    )
}

export default RegisterForm
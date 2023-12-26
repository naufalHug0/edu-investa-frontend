import React from 'react'
import { Button, Input } from '../../../../components'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    return (
        <>
            <h1 className='text-green-light text-stroke-black text-stroke font-extrabold text-3xl text-center'>Masuk ke <span className="text-green-primary">EduInvesta</span></h1>
            <Input placeholder='Username' className='mt-16 w-full' />
            <Input type='password' placeholder='Password' className='mt-4 w-full input-text'/>
            <Link className='self-end inline-block mt-4 font-bold text-sm text-green-primary'>Forgot Password?</Link>
            <Button className='mt-14 w-full'>Masuk</Button>
            <p className='inline-block mt-4 text-sm text-slate-400'>Belum punya akun? <Link className='text-green-primary font-bold underline' to='/auth/register' >Gabung Sekarang</Link></p>
        </>
    )
}

export default LoginForm
import React from 'react'
import { Outlet } from 'react-router'
import Background from '../assets/login-background.png'
import Illustration from '../assets/Image-login.png'

const AuthLayout = () => {
    return (
        <div className='flex lg:h-screen'>
            <div className="flex flex-col justify-center items-center flex-1" >
                <div className="w-[88%] lg:w-[80%]">
                    <Outlet/>
                </div>
            </div>
            <div className="flex-1 hidden lg:flex justify-center items-center p-12 flex-col" style={{ backgroundImage: `url(${Background})` }}>
                <p className="px-4 py-2 inline-flex leading-[1.2] bg-green-primary text-green-light font-semibold text-4xl">TEMPAT BELAJAR MENANAM UANG</p>
                <p className='italic bg-red-default text-green-light px-5 py-4 text-2xl mt-14'>"Cuan Datang dari Ilmu, Bukan Hanya Simpan-simpan”</p>
                <img src={Illustration} alt="Illustration" className='w-[70%] mt-12'/>
            </div>
        </div>
    )
}

export default AuthLayout
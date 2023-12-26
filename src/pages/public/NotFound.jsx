import React from 'react'
import { Button } from '../../components'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigateTo = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center bg-slate-800 h-screen w-full">
            <h1 className='text-xl tracking-[10px] font-extralight text-slate-300 mb-7'>HALAMAN TIDAK DITEMUKAN</h1>
            <Button onClick={() => navigateTo('/')}>Kembali</Button>
        </div>
    )
}

export default NotFound
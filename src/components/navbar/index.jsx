import React, { useEffect, useState } from 'react'
import Logo from '../../assets/Logo.png'
import Button from '../button'
import ProfilePicture from '../profile-picture'
import CoinIcon from '../../assets/coin-icon.png'
import { AuthServices } from '../../features/authentication/services'

const Services = new AuthServices()

const Navbar = ({
    user
}) => {
    const handleLogout = () => {
        Services.logout()   
    }

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-black py-4 px-5 flex justify-between items-center">
            <img src={Logo} className="w-40" alt="EduInvesta Logo"/>
            <div className="flex items-center gap-4">
                {
                    user && <div className="py-2 px-3 bg-gradient-to-l gradient-green hidden sm:flex items-center gap-[6px] rounded-md">
                        <p className="font-bold font-secondary text-white">XP Kamu : {user.total_xp}</p>
                        <img src={CoinIcon} width={22}/>
                    </div>
                }
                {
                    user && <div className='hover-effect'>
                        <ProfilePicture user={user}/>
                    </div>
                }
                <Button onClick={handleLogout} type='btn-danger' className='py-2 px-10 hidden sm:flex'>Logout</Button>
            </div>
        </nav>
    )
}

export default Navbar
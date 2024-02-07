import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../button'
import CoinIcon from '../../assets/coin-icon.png'
import { AuthServices } from '../../features/authentication/services'

const Services = new AuthServices()

const ProfilePicture = ({
    user
}) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const navigateTo = useNavigate()

    const handleClick = () => {
        setShowDropdown(!showDropdown)
    }

    const handleLogout = () => {
        Services.logout()   
    }

    return (
        <div className='relative'>
            <div className="rounded-full font-secondary flex justify-center items-center w-10 h-10 bg-green-contrast border-[1px] cursor-pointer border-black text-white font-bold" onClick={handleClick}>
                {
                    user && user.name.substring(0,1).toUpperCase()
                }
            </div>
            {
                showDropdown && <div className="profile-dropdown">
                    <ul>
                        <li className='px-5 py-4 hover:bg-slate-200 cursor-pointer' onClick={() => navigateTo('/app/profile')}>Profile</li>
                        {
                            user && <li className='sm:hidden px-5 py-4 hover:bg-slate-200 cursor-pointer'>
                                <div className="py-2 px-3 bg-gradient-to-l gradient-green flex items-center gap-[6px] rounded-md">
                                    <p className="font-bold font-secondary text-white">XP Kamu : {user.total_xp}</p>
                                    <img src={CoinIcon} width={22}/>
                                </div>
                            </li>
                        }
                        <li className='sm:hidden px-5 py-4 flex justify-center items-center'>
                            <Button onClick={handleLogout} type='btn-danger' className='py-2 px-10'>Logout</Button>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default ProfilePicture
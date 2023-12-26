import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../button'

const ProfilePicture = () => {
    const [showDropdown, setShowDropdown] = useState(false)

    const handleClick = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <div className='relative'>
            <div className="rounded-full w-10 h-10 bg-green-contrast border-[1px] cursor-pointer border-black" onClick={handleClick}></div>
            {
                showDropdown && <div className="profile-dropdown">
                    <ul>
                        <li className='px-5 py-4 hover:bg-slate-200 cursor-pointer'><Link>Profile</Link></li>
                        <li className='sm:hidden px-5 py-4 hover:bg-slate-200 cursor-pointer'>Search</li>
                        <li className='sm:hidden px-5 py-4 flex justify-center items-center'>
                            <Button type='btn-danger' className='py-2 px-10'>Logout</Button>
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default ProfilePicture
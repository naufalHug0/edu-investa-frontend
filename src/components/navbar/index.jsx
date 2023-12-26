import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'
import Icon from '../icon'
import SearchIcon from '../../assets/search.svg'
import Button from '../button'
import ProfilePicture from '../profile-picture'
import SearchBar from '../search-bar'

const Navbar = () => {
    const [showSearchBar, setShowSearchBar] = useState(false)

    const handleSearchClick = () => {
        setShowSearchBar(!showSearchBar)
    }

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-black py-4 px-5 flex justify-between items-center">
            <img src={Logo} className="w-40" alt="EduInvesta Logo"/>
            <div className="flex items-center gap-4">
                <div className="hover-effect" onClick={handleSearchClick}>
                    <Icon src={SearchIcon} width={25} className='hidden sm:block'/>
                </div>
                <div className='hover-effect'>
                    <ProfilePicture/>
                </div>
                <Button type='btn-danger' className='py-2 px-10 hidden sm:flex'>Logout</Button>
            </div>
            {
                showSearchBar && 
                <div className="search-bar-container">
                    <SearchBar/>
                </div>
            }
        </nav>
    )
}

export default Navbar
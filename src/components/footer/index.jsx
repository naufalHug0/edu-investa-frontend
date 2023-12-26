import React from 'react'

const Footer = ({ className }) => {
    return (
        <footer className={`text-right bg-white py-[18px] px-6 text-sm font-light border-t border-black ${className}`}>
            Copyright &copy; 2023 EduInvesta
        </footer>
    )
}

export default Footer
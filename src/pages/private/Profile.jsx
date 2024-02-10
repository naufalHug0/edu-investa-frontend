import React, { useEffect, useState } from 'react'
import { BackNavigation, Button, Icon, InputText } from '../../components'
import { Navigate, Route, Routes, useNavigate, useOutletContext } from 'react-router'
import CoinIcon from '../../assets/coin-icon.png'
import BarChartIcon from '../../assets/bar-chart-fill.svg'
import { AuthServices } from '../../features/authentication/services'

const Auth = new AuthServices()

const Profile = () => {
    const navigateTo = useNavigate()
    const userData = useOutletContext()
    const [activeRoute, setActiveRoute] = useState(location.href.split('/').reverse()[0]);

    const handleRouteChange = route => {
        setActiveRoute(route);
        navigateTo(`/app/profile/${route}`);
    }

    return (
        <>
            <BackNavigation handleBackNavigation={() => navigateTo('/app')}/>
            <div className="flex justify-center items-center min-h-screen py-5 mt-14">
                <div className="shadow-md bg-white border border-slate-400 rounded-md py-8  px-7 w-[90%] sm:w-[70%] flex justify-center items-center flex-col">
                    <div className="rounded-full font-secondary flex justify-center items-center w-20 h-20 bg-green-contrast border-[1px] text-2xl cursor-pointer border-black text-white font-bold" >
                    {
                        userData.name.substring(0,1).toUpperCase()
                    }
                    </div>
                    <p className="text-2xl font-bold mt-3 mb-5">{userData.name}</p>
                    <div className="flex max-w-full gap-3 lg:[&>*]:text-base lg:[&>*]:px-12 [&>*]:text-xs [&>*]:px-8 flex-wrap justify-center">
                        <Button type={activeRoute == '' || activeRoute == 'profile' ? 'btn-section-active':'btn-section'} onClick={() => handleRouteChange('')}>Edit Profile</Button>
                        <Button type={activeRoute == 'change-password' ? 'btn-section-active':'btn-section'} onClick={() => handleRouteChange('change-password')}>Ganti Password</Button>
                        <Button type={activeRoute == 'achievement' ? 'btn-section-active':'btn-section'} onClick={() => handleRouteChange('achievement')}>Pencapaian</Button>
                    </div>
                    <div className="mt-8 w-full">
                        <Routes>
                            <Route index element={<EditProfile user={userData}/>}/>
                            <Route path='change-password' element={<ChangePassword/>}/>
                            <Route path='achievement' element={<Achievement user={userData}/>}/>
                            <Route path='*' element={<Navigate to=''/>}/>
                        </Routes>
                    </div>
                    <Button type='btn-danger' className='mt-8 w-full' onClick={() => Auth.logout()}>Logout</Button>
                </div>
            </div>
        </>
    )
}

const EditProfile = ({
    user
}) => {
    const [showOptionButton, setShowOptionButton] = useState(false)
    const [name, setName] = useState(user.name)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)

    useEffect(() => {
        setShowOptionButton(inputHasChanges)
    }, [name, username, email])

    const inputHasChanges = () => {
        return name != user.name || username != user.username || email != user.email
    }

    const handleCancelButton = () => {
        setName(user.name)
        setUsername(user.username)
        setEmail(user.email)
    }

    return (
        <>
        <div>
            <p className='mb-2'>Name</p>
            <InputText placeholder='Nama' className='w-full' onChange={e => setName(e.target.value)} value={name}/>
        </div>
        <div className='mt-5'>
            <p className='mb-2'>Username</p>
            <InputText placeholder='Username' className='w-full' onChange={e => setUsername(e.target.value)} value={username}/>
        </div>
        <div className='mt-5'>
            <p className='mb-2'>Email</p>
            <InputText placeholder='Email' className='w-full' onChange={e => setEmail(e.target.value)} value={email}/>
        </div>
        {
            showOptionButton && 
            <div className="flex gap-3 mt-5">
                <Button>Simpan</Button>
                <Button type='btn-secondary' onClick={handleCancelButton}>Batal</Button>
            </div>
        }
        </>
    )
}

const ChangePassword = ({
    user
}) => {
    const [showOptionButton, setShowOptionButton] = useState(false)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirm_new_password, setConfirmNewPassword] = useState('')

    useEffect(() => {
        setShowOptionButton(inputHasChanges)
    }, [oldPassword, newPassword, confirm_new_password])

    const inputHasChanges = () => {
        return [oldPassword, newPassword, confirm_new_password].filter(i => i.length > 0).length == 3
    }

    const handleCancelButton = () => {
        setOldPassword('')
        setNewPassword('')
        setConfirmNewPassword('')
    }

    return (
        <>
        <div>
            <p className='mb-2'>Old Password</p>
            <InputText type='password' placeholder='Old Password' className='w-full' onChange={e => setOldPassword(e.target.value)} value={oldPassword}/>
        </div>
        <div className='mt-5'>
            <p className='mb-2'>New Password</p>
            <InputText type='password' placeholder='New Password' className='w-full' onChange={e => setNewPassword(e.target.value)} value={newPassword}/>
        </div>
        <div className='mt-5'>
            <p className='mb-2'>Confirm New Password</p>
            <InputText type='password' placeholder='Confirm New Password' className='w-full' onChange={e => setConfirmNewPassword(e.target.value)} value={confirm_new_password}/>
        </div>
        {
            showOptionButton && 
            <div className="flex gap-3 mt-5">
                <Button>Ubah</Button>
                <Button type='btn-secondary' onClick={handleCancelButton}>Batal</Button>
            </div>
        }
        </>
    )
}

const Achievement = ({
    user
}) => {
    return (
        <>
        <div className="py-3 px-3 bg-gradient-to-l flex w-full gradient-green items-center gap-[6px] rounded-md justify-center sm:w-max sm:justify-start">
            <p className="font-bold font-secondary text-white">XP Kamu : {user.total_xp}</p>
            <img src={CoinIcon} width={22}/>
        </div>
        <div className="mt-7">
            <div className='flex gap-2 text-4xl items-center font-secondary text-green-contrast font-bold mb-5'>
                <Icon src={BarChartIcon} width={30}/>
                Progress
            </div>
            <p className="text-slate-400 text-xl font-secondary">Ranking: <span className='text-light text-black font-bold'>#30</span></p>
            <p className="text-slate-400 text-xl font-secondary">Kursus selesai: <span className='text-light text-black font-bold'>30 Kursus</span></p>
            <p className="text-slate-400 text-xl font-secondary">Penghargaan: <span className='text-light text-black font-bold'>-</span></p>
        </div>
        <div className="mt-7">
            <p className="text-slate-400 italic font-secondary">* Penghargaan didapatkan setelah mencapai XP tertentu :</p>
            <p className="text-slate-400 italic font-secondary">50.000 XP : BRONZE e-Certificate</p>
            <p className="text-slate-400 italic font-secondary">300.000 XP : SILVER e-Certificate</p>
            <p className="text-slate-400 italic font-secondary">500.000 XP : GOLD e-Certificate</p>
        </div>
        </>
    )
}

export default Profile
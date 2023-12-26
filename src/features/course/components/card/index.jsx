import React from 'react'
import { Icon } from '../../../../components'
import ClockIcon from '../../../../assets/clock-history.svg'

const Card = () => {
  return (
    <div className='bg-white rounded-xl border-[1.4px] border-black shadow-default sm:shadow-none sm:shadow-hover cursor-pointer overflow-hidden relative'>
      <header className='h-12 px-4 py-[26px] flex items-center bg-green-contrast text-white font-bold border-b-[1.4px] border-black'>Kursus</header>
      <div className="pt-4 px-5 mt-1">
        <h1 className='font-semibold text-xl sm:text-2xl'>Investasi untuk Pemula</h1>
        <p className='font-light text-sm sm:text-base mt-2'>Belajar investasi dari nol, cocok buat kamu yang masih pemula</p>
        <footer className="flex justify-between items-center mt-12 border-t border-black border-dashed pt-4 pb-5">
          <div className="flex gap-3 items-center">
            <Icon src={ClockIcon} width={20}/>
            <p className='text-sm font-light'>5 episodes</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="course-label-level-easy text-xs">Beginner</div>
            <div className="xp-label text-xs">20 XP</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Card
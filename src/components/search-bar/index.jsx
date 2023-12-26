import React from 'react'
import Icon from '../icon'
import SearchIcon from '../../assets/search.svg'
import Input from '../input'

const SearchBar = () => {
    return (
        <div className='flex gap-4 py-4 border-b border-slate-200'>
            <Icon src={SearchIcon} width={25} className='text-slate-400'/>
            <Input 
            placeholder='Cari quiz, shorts, kursus...' 
            type='search'
            className='w-full focus:outline-none'
            />
        </div>
    )
}

export default SearchBar
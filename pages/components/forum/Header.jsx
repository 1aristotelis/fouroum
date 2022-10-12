import React from 'react'
import HeaderForm from './HeaderForm'

const Header = () => {
  return (
    <div className='px-2'>
        <h1 className='text-3xl font-bold text-zinc-100'>Fouroum sur la Bloque Chaine</h1>
        <div className='mt-5 flex justify-between'>
            <div className='text-orange-500 border-2 border-orange-500 rounded-md px-2 py-1'>Nouveau Topax</div>
            <div className='hidden md:flex'>
                <HeaderForm/>
            </div>
            <div className='text-orange-500 border-2 border-orange-500 rounded-md px-2 py-1'>Actualiser</div>
        </div>
        <div className='flex md:hidden mt-4 px-4'>
            <HeaderForm/>
        </div>
        <div className='mt-5 border-0 border-t-2 border-zinc-500'/>
    </div>
  )
}

export default Header
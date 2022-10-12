import React from 'react'

const TopaxComposer = () => {
  return (
    <div className='p-4'>
        <h1 className='text-2xl font-bold text-zinc-100'>Nouveau Topax</h1>
        <form className='flex flex-col py-2'>
            <input type="text" placeholder='Saisir le titre du topax'/>
            <div className='flex my-2'>
            <button className='text-zinc-400 text-sm border border-zinc-400 py-1 px-2 rounded-md'>Ajouter un sondage</button>
            <div className='grow'/>
            </div>
            <input type="text" placeholder='Quoi de neuf les kheys'/>
            <div></div>
            <div className='flex my-2'>
            <button className='text-white text-lg font-bold bg-orange-500 py-1 px-8 rounded-md'>POSTER</button>
            <div className='grow'/>
            </div>
        </form>
    </div>
  )
}

export default TopaxComposer
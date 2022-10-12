import React from 'react'

const HeaderForm = () => {
  return (
    <form className='flex gap-2 justify-between w-full'>
        <input type="text" placeholder="Rechercher dans le forum"/>
        <select name="type">
            <option value="topax">Topax</option>
            <option value="message">Message</option>
            <option value="auteur">Auteur</option>
        </select>
        <button type='submit' className='text-zinc-100'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </button>
    </form>
  )
}

export default HeaderForm
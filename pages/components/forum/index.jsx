import React from 'react'
import Header from './Header'
import TopaxComposer from './TopaxComposer'
import TopaxList from './TopaxList'

const Forum = () => {
  return (
    <div className='flex'>
        <div className='w-full'>
            <Header/>
            <TopaxList/>
            <TopaxComposer/>
        </div>
        <div className='h-[690px] min-w-[300px] hidden md:flex '></div>
    </div>
  )
}

export default Forum
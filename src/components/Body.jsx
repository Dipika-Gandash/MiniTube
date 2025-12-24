import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='flex flex-1 overflow-hidden gap-6'>
        <SideBar />
        <MainContainer />
    </div>
  )
}

export default Body
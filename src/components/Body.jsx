import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  return (
    <div className='flex flex-1 overflow-hidden gap-6'>
       {isMenuOpen && <SideBar />}
        <MainContainer />
    </div>
  )
}

export default Body
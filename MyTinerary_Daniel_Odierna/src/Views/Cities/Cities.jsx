import React from 'react'
import MainLayout from '../../Components/MainLayout/MainLayout'
import './cities.css'
import SearchBar from '../../Components/SearchBar/SearchBar'

import { Outlet } from 'react-router-dom'




const Cities = () => {
  return (
    
   <MainLayout>
    <div className='LayoutCities'>
        <SearchBar/>
        
        <Outlet />
    </div>
    </MainLayout>
  )
}

export default Cities
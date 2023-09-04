import React from 'react'
import MainLayout from '../../Components/MainLayout/MainLayout'
import './cities.css'
import SearchBar from '../../Components/SearchBar/SearchBar'


const Cities = () => {
  return (
    <MainLayout>
   
    <div className='LayoutCities'>
        <SearchBar/>
        {/* <CityItinerary/> */}
        
    </div>

   
    </MainLayout>
  )
}

export default Cities
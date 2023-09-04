import React from 'react'
import '../Home/home.css'
import Hero from '../../Components/Hero/Hero'
import ImageCarousel from '../../Components/Carrousel/Carrousel'
import { Outlet } from 'react-router-dom'
import MainLayout from '../../Components/MainLayout/MainLayout'


const Home = () => {
    return (
     <MainLayout>
        <Hero />
        <ImageCarousel />
        <Outlet />
     </MainLayout>
       
    )
};

export default Home
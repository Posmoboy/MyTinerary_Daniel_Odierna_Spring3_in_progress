import React from 'react'
import './MainLayout.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

 const MainLayout = ({children}) => {
    return (
        <div>
            <Header />

            <main className='MainLayout__container'>
              {children}

            </main>
            <Footer />

        </div>
    )
};

export default MainLayout;

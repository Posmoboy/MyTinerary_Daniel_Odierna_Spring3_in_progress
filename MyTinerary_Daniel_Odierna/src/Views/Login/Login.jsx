import React from 'react'

import MainLayout from '../../Components/MainLayout/MainLayout'
import SignIn from '../../Components/SingPages/SignIn'
import SignUp from '../../Components/SingPages/SignUp'
import { Outlet } from 'react-router-dom'

export const Login = () => {
  return (
    <MainLayout>
        <Outlet />
    <SignIn/>
 </MainLayout>
  )
}


export default Login
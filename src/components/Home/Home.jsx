import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import { Footer } from './footer/Footer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
      <Outlet/>
    </div>
  )
}

export default Home
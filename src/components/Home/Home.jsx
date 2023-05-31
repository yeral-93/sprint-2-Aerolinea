import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import { Footer } from './footer/Footer'
import { Outlet } from 'react-router-dom'
import { DivHome } from './StyleHome'

const Home = () => {
  return (
    <DivHome>
      <Header/>
      <Main/>
      <Footer/>
      <Outlet/>
    </DivHome>
  )
}

export default Home
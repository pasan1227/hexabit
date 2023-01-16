import React from 'react'
import './home.css'
import logo from '../../assets/logo.svg'

const Home = () => {
  return (
    <section className='home-container' id='home'>
      <img src={logo} alt="" />
      <p>WHERE DIGITAL ASSETS MEET BLOCKCHAIN TECH</p>
      </section>
  )
}

export default Home
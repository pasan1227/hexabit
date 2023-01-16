import React from 'react'
import logo from '../../assets/logo.svg'
import Particle from '../../components/Particle'
import './home.css'

const Home = () => {
  return (
    <section className='home-container' id='home'>
      <div className='particle-container' id='tsparticles'>
        {/* <Particle /> */}
      </div>
      {/* <canvas style={{ height: '100%', width: '100%', pointerEvents: 'initial' }} width="1600" height="696">
        <Particle id='tsparticles' />
      </canvas> */}
      <img src={logo} alt="" />
      <p>WHERE DIGITAL ASSETS MEET BLOCKCHAIN TECH</p>
    </section>
  )
}

export default Home
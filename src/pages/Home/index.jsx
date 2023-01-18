import React from 'react';
import logo from '../../assets/logo.svg';
import ParticleBackground from '../../components/Particle';
import './home.css';

const Home = () => {
  return (
    <section className='home-container' id='home'>
      <div className='particle-container'>
        {/* <ParticleBackground /> */}
      {/* <canvas
        style={{ height:'100%', width: '100%', pointerEvents: 'initial' }}
        width='1600'
        id='tsparticles'>
        <Particle />
      </canvas> */}
      <img src={logo} alt='' />
      <p>WHERE DIGITAL ASSETS MEET BLOCKCHAIN TECH</p>
      </div>
    </section>
  );
};

export default Home;

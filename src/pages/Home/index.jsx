import React from 'react';
import logo from '../../assets/logo.svg';
import square from '../../assets/square.png';
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
        <img src={square} alt="" className="square-bg" id="head-square" style={{ opacity: 1, visibility: 'inherit', transform: 'translate(0px, 0px)' }} />
        <img src={logo} alt='' />
        <p>WHERE DIGITAL ASSETS MEET BLOCKCHAIN TECH</p>
        <div class="field">
          <div class="mouse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;

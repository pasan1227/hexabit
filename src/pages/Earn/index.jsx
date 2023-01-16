import React from 'react'
import globe from '../../assets/globe-cropped.svg';
import ButtonTwo from '../../components/Button-2'
import Step from '../../components/Step'
import './earn.css'
import apply from '../../assets/apply.svg'
import collab from '../../assets/collab.svg'
import earn from '../../assets/earn.svg'

const Earn = () => {
  return (
    <section className='earn-container' id='earn'>
      <div className='left-side'>
        <div className='left-top'>
          <h1>START EARNING</h1>
          <p>
            A remote workplace and a growing <br />
            company is waiting for you.
          </p>
          <div className='apply-button-earn'>
            <ButtonTwo text='APPLY NOW' icon='less-than' />
          </div>
        </div>
        <div className='left-bottom'>
          <img src={globe} alt='' />
        </div>
      </div>
      <div className='right-side'>
        <div className='right-top'>
          <p className='heading'>
            ARE YOU ACTIVE <br />
            ON SOCIAL MEDIA?
          </p>
          <p className='description'>
            Start earning by joining our affiliate <br />
            program. You'll offer products and <br />
            services made by hexabit.
          </p>
        </div>
        <div className='right-bottom'>
          <div className='steps'>
            {/* <Step
              number='1'
              stepName='APPLY'
              icon='fa-regular fa-circle-check'
            />
            <Step
              number='2'
              stepName='COLLAB'
              icon='fa-regular fa-circle-check'
            />
            <Step
              number='3'
              stepName='EARN'
              icon='fa-regular fa-circle-check'
            /> */}
            <img className='step' src={apply} alt="" />
            <img className='step' src={collab} alt="" />
            <img className='step' src={earn} alt="" />
          </div>
          <div className='apply-button-earn-two'>
            <ButtonTwo text='APPLY NOW' icon='less-than' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Earn
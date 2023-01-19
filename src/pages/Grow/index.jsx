/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react'
import strategy from '../../assets/strategy.svg'
import Button from '../../components/Button'
import SliderDots from '../../components/Page-navigator'
import './grow.css'



const Grow = () => {

  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const schedulingButtonRef = useRef(null);

  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    script.addEventListener('load', () => {
      window.addEventListener('load', function () {
        setLoaded(true);
      });
    });
    document.body.appendChild(script);
  }, []);

  return (
    <section className='grow-container' id='grow'>
      <div className='strategy-left'>
        <SliderDots />
        <div className='strategy-left-content'>
          <div className='heading'>
            <h1>STRATEGY</h1>
            <div className='sub-heading'>
              <p className='hex' />
              <p>NE</p>
            </div>
          </div>
          <p className='description'>
            A free 1-1 consultation with Charlie Z to <br />
            discuss your business gameplan in depth.
          </p>
          <Button
            // ref={schedulingButtonRef}
            icon='phone-volume'
            text='SPEAK WITH CHARLIE'
            onClick={() => {
              if (!clicked && loaded) {
                setClicked(true);
                calendar.schedulingButton.load({
                  url: `https://calendar.google.com/calendar/appointments/schedules/AcZssZ0PWzspzhjvQKWugLhe51ZQ49Pjdd28T_PD5xdknEMcZtYTqprs8HpdSTEepcGfMw0j_Ozm-vs9?gv=true`,
                  color: '#039BE5',
                  label: 'Book an appointment',
                  target: schedulingButtonRef.current,
                });
              }
            }}
          />
          <div ref={schedulingButtonRef}></div>
        </div>
      </div>
      <div className='strategy-right'>
        <div className='image'>
          <img src={strategy} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Grow
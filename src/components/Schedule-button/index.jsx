import React, { useEffect } from 'react';

function ScheduleButton({text, icon, onClick}) {
  useEffect(() => {
    // Add the Google Calendar scheduling code to the component's DOM node after it has been rendered
    let link = document.createElement("link");
    link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.body.appendChild(link);

    let script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = function () {
      // Load the scheduling button after the script has been loaded
      calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0PWzspzhjvQKWugLhe51ZQ49Pjdd28T_PD5xdknEMcZtYTqprs8HpdSTEepcGfMw0j_Ozm-vs9?gv=true',
        // color: '#039BE5',
        // label: 'Book an appointment',
        
        target: document.getElementById("schedule-button"),
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div id='schedule-button' className="custom-button" onClick={onClick}>
      <span>{text}</span>
      <div className='icon'>
        <i className={`fa fa-${icon} button-icon`} />
      </div>
    </div>
  );
}

export default ScheduleButton;
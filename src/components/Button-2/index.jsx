import React from 'react';
import './buttonTwo.css';

const ButtonTwo = ({ text, icon, onClick }) => {
    return (
        <div className="custom-button-two" onClick={onClick}>
            <div className='icon-two'>
            <i className={`fa fa-less-than button-icon-two`} />
            </div>
            <span className="button-text-two">{text}</span>
        </div>
    );
}

export default ButtonTwo;

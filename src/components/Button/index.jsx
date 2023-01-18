import './button.css';


const Button = ({ text, icon, onClick }) => {
    return (
        <div className="custom-button" onClick={onClick}>
            <span>{text}</span>
            <div className='icon'>
                <i className={`fa fa-${icon} button-icon`} />
            </div>
        </div>
    );
}

export default Button;

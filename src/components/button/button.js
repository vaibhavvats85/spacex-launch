import React from 'react';
import './button.scss';

const Button = ({ value, handleClick, group, active }) => {

    const isChecked = active && value ? active.toLowerCase() === value.id.toLowerCase() : false;

    return (
        <div className="button">
            <input type="radio" name={group} id={value.id} value={value.val} onClick={handleClick} defaultChecked={isChecked} />
            <label className={isChecked ? 'btn btn-active' : 'btn'} htmlFor={value.id}>{value.val}</label>
        </div>
    );
};


export default Button;
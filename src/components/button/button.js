import React from 'react';
import './button.scss';

const Button = ({ value, handleClick, group, active }) => {

    const isChecked = active && value ? active.toLowerCase() === value.id.toLowerCase() : false;

    return (
        <span className={isChecked ? 'btn btn-active' : 'btn'}>
            <input type="radio" name={group} id={value.id} value={value.val} onClick={handleClick} defaultChecked={isChecked} />
            <label htmlFor={value.id}>{value.val}</label>
        </span>
    );
};


export default Button;
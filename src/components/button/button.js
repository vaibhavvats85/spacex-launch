import React from 'react';
import './button.scss';

const Button = ({ value, handleClick, styles = {} }) => {
    return (
        <button className="btn" style={styles} value={value} onClick={handleClick}>{value}</button>
    );
};

export default Button;
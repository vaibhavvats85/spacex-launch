import Button from '../button/button';
import React from 'react';

const FilterButtons = ({ btns, type, clickEvent, params }) => {
    return btns.map((val, index) => {
        const active = params.get(type) + type;
        const value = {
            val: val,
            id: val + type
        }
        return <Button
            active={active}
            key={index}
            group={type}
            value={value}
            handleClick={(e) => clickEvent(e, type)} />
    });
};


export default FilterButtons;

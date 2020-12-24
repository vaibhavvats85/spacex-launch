import { useHistory, useLocation } from 'react-router-dom';
import Button from '../button/button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { launchProgramFilter } from '../../store/launch-programs/actions';

const FilterButtons = ({ btns, type }) => {

    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const params = new URLSearchParams(location.search);

    const handleClick = (event) => {
        const value = event.target.value.toLowerCase();
        const key = type;
        if (params.get(key) && value === params.get(key)) {
            params.delete(key)
        } else {
            params.set(key, value);
        }
        const queryObj = getParamsObj();
        dispatch(launchProgramFilter(queryObj));

        const query = params.toString();
        history.push({ pathname: '/filters', search: query });
    };

    const getParamsObj = () => {
        let queryObj = {};
        for (let entry of params.entries()) {
            queryObj = {
                ...queryObj,
                [entry[0]]: entry[1]
            }
        };
        return queryObj;
    }

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
            handleClick={(e) => handleClick(e)} />
    });
};


export default FilterButtons;

import { useDispatch } from "react-redux";
import Button from "../button/button";
import './filters.scss';
import * as constants from '../../constants';
import React from 'react';
import { launchProgramFilter } from "../../store/launch-programs/actions";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Filters = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // Button click event
    const handleClick = (event, filter) => {
        const value = event.target.value.toLowerCase();
        const key = constants.QUERY_MAP[filter];
        if (params.get(key) && value === params.get(key)) {
            params.delete(key)
        } else {
            params.set(key, value);
        }
        const query = params.toString();
        dispatch(launchProgramFilter(query));
        history.push({ pathname: '/filters', search: query });
    };

    // Year buttons for Launch Years
    const YearBtns = () => {
        let years = [];
        let launchStartYear = 2006;
        const currentYear = new Date().getFullYear();

        while (launchStartYear <= currentYear) {
            years.push(launchStartYear.toString());
            launchStartYear++;
        }
        return years.map((year, index) => {
            const value = {
                val: year,
                id: year
            }
            return <Button
                key={index}
                value={value}
                active={params.get(constants.QUERY_MAP[constants.LAUNCH_YEAR])}
                group={constants.LAUNCH_YEAR}
                handleClick={(e) => handleClick(e, constants.LAUNCH_YEAR)} />
        }
        );
    };

    // True/False buttons for Successful Landing and Successful Launch
    const BooleanBtns = ({ type }) => (
        ['True', 'False'].map((val, index) => {
            const active = params.get(constants.QUERY_MAP[type]) + type;
            const value = {
                val: val,
                id: val + type
            }
            return <Button
                active={active}
                key={index}
                group={type}
                value={value}
                handleClick={(e) => handleClick(e, type)} />
        }
        ));


    return (
        <div className="filters">
            <h1>{constants.FILTERS}</h1>
            <div className="type">
                <span className="head">{constants.LAUNCH_YEAR}</span>
                <div className="btns">
                    <YearBtns />
                </div>
            </div>
            <div className="type">
                <span className="head">{constants.SUCCESSFULL_LAUNCH}</span>
                <BooleanBtns type={constants.SUCCESSFULL_LAUNCH} />
            </div>
            <div className="type">
                <span className="head">{constants.SUCCESSFULL_LANDING}</span>
                <BooleanBtns type={constants.SUCCESSFULL_LANDING} />
            </div>
        </div>
    );
};

export default Filters;
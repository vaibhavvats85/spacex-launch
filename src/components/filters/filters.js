import { useDispatch } from "react-redux";
import Button from "../button/button";
import './filters.scss';
import * as constants from '../../constants';
import React, { useEffect, useState } from 'react';
import { launchProgramFilter } from "../../store/launch-programs/actions";

const Filters = () => {
    const [filters, setFilters] = useState({
        launch_year: null,
        launch_success: null,
        land_success: null
    });

    const dispatch = useDispatch();

    const handleClick = (event, filter) => {
        event.target.style.backgroundColor = 'blue';
        switch (filter) {
            case constants.LAUNCH_YEAR: setFilters({
                ...filters,
                launch_year: event.target.value
            });
                break;
            case constants.SUCCESSFULL_LAUNCH: setFilters({
                ...filters,
                launch_success: event.target.value.toLowerCase()
            });
                break;
            case constants.SUCCESSFULL_LANDING: setFilters({
                ...filters,
                land_success: event.target.value.toLowerCase()
            });
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        dispatch(launchProgramFilter(filters));
    }, [filters]);

    const YearBtns = () => {
        let years = [];
        let launchStartYear = 2006;
        const currentYear = new Date().getFullYear();

        while (launchStartYear <= currentYear) {
            years.push(launchStartYear);
            launchStartYear++;
        }
        return years.map((year, index) =>
            <Button
                key={index}
                value={year}
                handleClick={(e) => handleClick(e, constants.LAUNCH_YEAR)} />);
    }

    const BooleanBtns = ({ type }) =>
        (<>
            <Button value="True" handleClick={(e) => handleClick(e, type)} />
            <Button value="False" handleClick={(e) => handleClick(e, type)} />
        </>);

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
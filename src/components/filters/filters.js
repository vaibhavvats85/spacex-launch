import { useDispatch } from "react-redux";
import './filters.scss';
import * as constants from '../../constants';
import React from 'react';
import { launchProgramFilter } from "../../store/launch-programs/actions";
import { useHistory } from "react-router-dom";
import BooleanFilters from "./type/boolean-filter";
import LaunchYearFilters from "./type/launch-year";

const Filters = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    // Button click event
    const handleClick = (event, filter, params) => {
        const value = event.target.value.toLowerCase();
        const key = filter;
        if (params.get(key) && value === params.get(key)) {
            params.delete(key)
        } else {
            params.set(key, value);
        }
        const queryObj = getParamsObj(params);
        dispatch(launchProgramFilter(queryObj));

        const query = params.toString();
        history.push({ pathname: '/filters', search: query });
    };

    const getParamsObj = (params) => {
        let queryObj = {};
        for (let entry of params.entries()) {
            queryObj = {
                ...queryObj,
                [entry[0]]: entry[1]
            }
        };
        return queryObj;
    }

    return (
        <div className="filters">
            <h1>{constants.FILTERS}</h1>
            <div className="type">
                <span className="head">{constants.LAUNCH_YEAR}</span>
                <div className="btns">
                    <LaunchYearFilters clickEvent={handleClick} type={constants.LAUNCH_YEAR_KEY} />
                </div>
            </div>
            <div className="type">
                <span className="head">{constants.SUCCESSFULL_LAUNCH}</span>
                <BooleanFilters clickEvent={handleClick} type={constants.LAUNCH_SUCCESS_KEY} />
            </div>
            <div className="type">
                <span className="head">{constants.SUCCESSFULL_LANDING}</span>
                <BooleanFilters clickEvent={handleClick} type={constants.LAND_SUCCESS_KEY} />
            </div>
        </div>
    );
};

export default Filters;
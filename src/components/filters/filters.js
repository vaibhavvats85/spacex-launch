import './filters.scss';
import * as constants from '../../constants';
import React from 'react';
import FilterButtons from "./filter-buttons";
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as utils from '../../utils';
import { launchProgramRequest } from '../../store/launch-programs';

const Filters = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const params = new URLSearchParams(location.search);

    const years = (() => {
        let years = [];
        let launchStartYear = 2006;
        const currentYear = new Date().getFullYear();
        while (launchStartYear <= currentYear) {
            years.push(launchStartYear.toString());
            launchStartYear++;
        }
        return years;
    })();

    const booleans = ['True', 'False'];

    const filterType = [{
        title: constants.LAUNCH_YEAR,
        key: constants.LAUNCH_YEAR_KEY,
        btns: years,
    },
    {
        title: constants.SUCCESSFULL_LAUNCH,
        key: constants.LAUNCH_SUCCESS_KEY,
        btns: booleans,

    },
    {
        title: constants.SUCCESSFULL_LANDING,
        key: constants.LAND_SUCCESS_KEY,
        btns: booleans
    }];


    const handleClick = (event, type) => {
        const value = event.target.value.toLowerCase();
        const key = type;
        if (params.get(key) && value === params.get(key)) {
            params.delete(key)
        } else {
            params.set(key, value);
        }
        const queryObj = utils.getParamsObj(params);
        dispatch(launchProgramRequest(queryObj));

        const query = params.toString();
        history.push({ pathname: '/filters', search: query });
    };

    return (
        <div className="filters">
            <h1>{constants.FILTERS}</h1>
            <div className="type">
                {
                    filterType.map((filter, index) => (
                        <React.Fragment key={index}>
                            <span className="head">{filter.title}</span>
                            <div className="btns">
                                <FilterButtons

                                    btns={filter.btns}
                                    type={filter.key}
                                    clickEvent={handleClick}
                                    params={params}
                                />
                            </div>
                        </React.Fragment>
                    ))
                }

            </div>
        </div>
    );
};

export default Filters;
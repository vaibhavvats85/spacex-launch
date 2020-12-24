import './filters.scss';
import * as constants from '../../constants';
import React from 'react';
import FilterButtons from "./filter-buttons";

const Filters = () => {
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
        btns: years
    },
    {
        title: constants.SUCCESSFULL_LAUNCH,
        key: constants.LAUNCH_SUCCESS_KEY,
        btns: booleans
    },
    {
        title: constants.SUCCESSFULL_LANDING,
        key: constants.LAND_SUCCESS_KEY,
        btns: booleans
    }];



    return (
        <div className="filters">
            <h1>{constants.FILTERS}</h1>
            <div className="type">
                {
                    filterType.map(filter => (
                        <>
                            <span className="head">{filter.title}</span>
                            <div className="btns">
                                <FilterButtons
                                    btns={filter.btns}
                                    type={filter.key} />
                            </div>
                        </>
                    ))
                }

            </div>
        </div>
    );
};

export default Filters;
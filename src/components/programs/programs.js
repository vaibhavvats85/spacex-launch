import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { launchProgramFilter, launchProgramRequest } from "../../store/launch-programs/actions";
import './programs.scss';
import '../../shared-styles/loader.scss';
import * as constants from '../../constants';
import Cards from "./cards";
import { useLocation } from "react-router-dom";
import * as utils from '../../utils';

const Programs = () => {
    const { data, hasError, loading } = useSelector(state => state.launchPrograms);
    const dispatch = useDispatch();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const queryObj = utils.getParamsObj(params);

    useEffect(() => {
        dispatch(launchProgramRequest(queryObj));
    }, [dispatch]);

    return (
        <div className="programs">
            {
                (data.length !== 0) ?
                    <Cards lauchPrograms={data} /> :
                    (loading) ?
                        <Loader /> : (hasError) ?
                            <Error /> : <Noprograms />
            }
        </div>
    );
}

const Loader = () => (<div className="loading"></div>);

const Error = () => (<strong>{constants.LAUNCH_ERROR}</strong>);

const Noprograms = () => (<strong>{constants.NO_PROGRAM}</strong>);

export default Programs;
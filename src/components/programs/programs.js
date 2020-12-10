import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { launchProgramRequest } from "../../store/launch-programs/actions";
import Card from "../card/card";
import './programs.scss';
import '../../shared-styles/loader.scss';
import * as constants from '../../constants';

const Programs = () => {
    const { data, hasError, loading } = useSelector(state => state.launchPrograms);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(launchProgramRequest());
    }, []);

    return (
        <div className="programs">
            {
                (data.length !== 0) ?
                    <Cards lauchPrograms={data} /> :
                    (loading) ? <Loader /> : (hasError) ? <Error /> : <Noprograms />
            }
        </div>
    );
}

const Cards = ({ lauchPrograms }) => (
    lauchPrograms.map((program) => {
        const { flight_number, mission_name } = program;
        return <Card key={flight_number + mission_name} data={program} />
    }));

const Loader = () => (<div className="loading"></div>);

const Error = () => (<strong>{constants.LAUNCH_ERROR}</strong>);

const Noprograms = () => (<strong>{constants.NO_PROGRAM}</strong>);

export default Programs;
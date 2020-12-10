import React from 'react';
import * as constants from '../../constants';

import './card.scss';

const Card = ({ data, styles }) => {

    const { links: { mission_patch_small }, mission_name, flight_number, mission_id, launch_year, launch_success, rocket: { first_stage: { cores } } } = data;
    const { land_success } = cores[0];
    return (
        <div className="card" style={styles}>
            <div className="card-img">
                <img alt="rocket" src={mission_patch_small}></img>
            </div>

            <span className="title">{mission_name} #{flight_number}</span>

            <div className="card-body">
                <div>
                    <strong>{constants.MISSION_IDS}: </strong>
                    <ul className="value">
                        {
                            mission_id.map(id => (<li key={id}>{id}</li>))
                        }
                    </ul>
                </div>
                <div>
                    <strong>{constants.LAUNCH_YEAR}: </strong>
                    <span className="value">{launch_year}</span>
                </div>
                <div>
                    <strong>{constants.SUCCESSFULL_LAUNCH}: </strong>
                    <span className="value">{launch_success ? launch_success.toString() : 'false'}</span>
                </div>
                <div>
                    <strong>{constants.SUCCESSFULL_LANDING}: </strong>
                    <span className="value">{land_success ? land_success.toString() : 'false'}</span>
                </div>

            </div>
        </div>
    )
};

export default Card;
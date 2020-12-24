import React from 'react';
import Card from '../card/card';
import './programs.scss';

const Cards = ({ lauchPrograms }) => (
    lauchPrograms.map((program) => {
        const { flight_number, mission_name } = program;
        return <Card key={flight_number + mission_name} data={program} />
    }));

export default Cards;    
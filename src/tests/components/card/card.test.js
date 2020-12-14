import { shallow } from 'enzyme';
import Card from '../../../components/card/card';
import React from 'react';

const mockPrograms = {
    flight_number: 1,
    mission_name: 'SpaceX first',
    mission_id: ['9AD2ER', '1GT234'],
    launch_year: '2020',
    launch_success: 'true',
    rocket: {
        first_stage: {
            cores: [
                {
                    land_success: null
                }
            ]
        }
    },
    links: {
        mission_patch_small: 'mock-image'
    }
};

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Card data={mockPrograms} />);
});

test('should render card correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
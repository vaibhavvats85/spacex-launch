import { shallow } from 'enzyme';
import * as constants from '../../../constants';
import React from 'react';
import FilterButtons from '../../../components/filters/filter-buttons';

let wrapper;
let props = {
    btns: ['2006', '2007'],
    type: constants.LAUNCH_YEAR_KEY,
    params: { get: jest.fn().mockReturnValue('2006') },
    clickEvent: jest.fn()
}
jest.mock('react-router-dom', () => ({
    useLocation: () => ({ search: '?launch_year=2006' }),
}));

beforeEach(() => {
    wrapper = shallow(<FilterButtons {...props} />);
});

test('should render FilterButtons component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should check button correctly', () => {
    const active = wrapper.find('Button').at(0).prop('active').toLowerCase();
    const id = wrapper.find('Button').at(0).prop('value').id.toLowerCase();
    expect(id).toEqual(active)
});


test('should call handleClick event', () => {
    wrapper.find('Button').at(0).prop('handleClick')();
    expect(props.clickEvent).toHaveBeenCalled();
});

import { shallow } from 'enzyme';
import LaunchYearFilters from '../../../../components/filters/type/launch-year';
import * as constants from '../../../../constants';
import React from 'react';

let wrapper;
let props = {
    type: constants.LAUNCH_YEAR_KEY,
    clickEvent: jest.fn()
}
jest.mock('react-router-dom', () => ({
    useLocation: () => ({ search: '?launch_year=2006' }),
}));

beforeEach(() => {
    wrapper = shallow(<LaunchYearFilters {...props} />);
});

test('should render LaunchYearFilters component correctly', () => {
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

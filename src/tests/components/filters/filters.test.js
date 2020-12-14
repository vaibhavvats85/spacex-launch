import { shallow } from 'enzyme';
import Filters from '../../../components/filters/filters';
import React from 'react';

let wrapper;
jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),

}));
jest.mock('react-router-dom', () => ({
    useLocation: () => jest.fn(),
    useHistory: () => jest.fn()
}))
beforeEach(() => {
    wrapper = shallow(<Filters />);
});

test('should render filters component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

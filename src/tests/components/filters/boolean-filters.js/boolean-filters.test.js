import { shallow } from 'enzyme';
import { useLocation } from 'react-router-dom';
import BooleanFilters from '../../../../components/filters/type/boolean-filter';
import * as constants from '../../../../constants';
let wrapper;
let props = {
    type: constants.LAUNCH_SUCCESS_KEY,
    clickEvent: jest.fn()
}
jest.mock('react-router-dom', () => ({
    useLocation: () => ({ search: '?launch_success=true' }),
}));

beforeEach(() => {
    wrapper = shallow(<BooleanFilters {...props} />);
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

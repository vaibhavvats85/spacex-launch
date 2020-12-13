import { shallow } from 'enzyme';
import Programs from '../../../components/programs/programs';

let wrapper;
jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: () => ({
        data: ['some data'],
        hasError: false,
        loading: false
    })
}));
jest.mock('react-router-dom', () => ({
    useLocation: () => jest.fn(),
    useHistory: () => jest.fn()
}))
beforeEach(() => {
    wrapper = shallow(<Programs />);

});
test('programs component should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render cards if data is present', () => {
    const card = wrapper.find('Cards');
    expect(card).toBeTruthy();
});

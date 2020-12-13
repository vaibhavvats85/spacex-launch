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
}));

beforeEach(() => {
    wrapper = shallow(<Programs />);
});

test('programs component should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render cards if data is present', () => {
    const cards = wrapper.find('Cards');
    expect(cards).toBeTruthy();
});

test('should render loader if data is present', () => {
    jest.mock('react-redux', () => ({
        useDispatch: jest.fn(),
        useSelector: () => ({
            data: [],
            hasError: false,
            loading: true
        })
    }));
    const wrapper = shallow(<Programs />);
    const loader = wrapper.find('Loader');
    expect(loader).toBeTruthy();
});

test('should render error if data is present', () => {
    jest.mock('react-redux', () => ({
        useDispatch: jest.fn(),
        useSelector: () => ({
            data: [],
            hasError: true,
            loading: false
        })
    }));
    const wrapper = shallow(<Programs />);
    const error = wrapper.find('Error');
    expect(error).toBeTruthy();
});

test('should render noprograms if data is present', () => {
    jest.mock('react-redux', () => ({
        useDispatch: jest.fn(),
        useSelector: () => ({
            data: [],
            hasError: false,
            loading: false
        })
    }));
    const wrapper = shallow(<Programs />);
    const noprograms = wrapper.find('Noprograms');
    expect(noprograms).toBeTruthy();
});

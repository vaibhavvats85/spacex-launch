import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../../App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

test('should render app component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render all child components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Header').exists()).toBeTruthy();
  expect(wrapper.find('Filters').exists()).toBeTruthy();
  expect(wrapper.find('Programs').exists()).toBeTruthy();
  expect(wrapper.find('Signature').exists()).toBeTruthy();
});



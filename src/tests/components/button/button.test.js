import { shallow } from 'enzyme';
import Button from '../../../components/button/button';
import React from 'react';

let value, handleClick, wrapper;

beforeEach(() => {
    value = 'True';
    handleClick = jest.fn();
    wrapper = shallow(<Button value={value} handleClick={handleClick} />);
});

test('should render button corectly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call handleClick event', () => {
    wrapper.find('input').prop('onClick')();
    expect(handleClick).toHaveBeenCalled();
});
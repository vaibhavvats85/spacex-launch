import { shallow } from 'enzyme';
import Button from '../../../components/button/button';
import React from 'react';

let value, handleClick, wrapper;

beforeEach(() => {
    value = {
        val: '2006',
        id: '2006'
    };
    handleClick = jest.fn();
    wrapper = shallow(<Button value={value} handleClick={handleClick} />);
});

test('should render button corectly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call onClick event', () => {
    wrapper.find('input').prop('onClick')();
    expect(handleClick).toHaveBeenCalled();
});

test('should render label correctly', () => {
    expect(wrapper.find('label').text()).toEqual(value.id);
});
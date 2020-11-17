import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';
import { mockState } from "react-redux";


describe('Counter', () => {
	
  it('should a div with some text', () => {
	let wrapped = shallow(
		<Counter />
	);
    expect(wrapped.find('div').length).toEqual(1);
    expect(wrapped.find('div').text()).toContain('Total rounds played.');
  });

  it('should a div with the state counter as text', () => {
	mockState({
		roundResult: {
			counter: 123
		},
	});

	let wrapped = shallow(
		<Counter />
	);
    expect(wrapped.find('div').length).toEqual(1);
    expect(wrapped.find('div').text()).toEqual('123 Total rounds played.');
  });
});
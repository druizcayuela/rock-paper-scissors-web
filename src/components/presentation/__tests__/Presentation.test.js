import React from 'react';
import { shallow } from 'enzyme';
import Presentation from '../Presentation';
import Counter from '../../counter/Counter';

jest.doMock('../../counter/Counter', () => {
	const Counter = () => <div />;
	return Counter;
});

describe('Presentation', () => {
	
  it('should render only the header component', () => {
	let wrapped = shallow(
		<Presentation />
	);
    expect(wrapped.find('Header').length).toEqual(1);
    expect(wrapped.find('Counter').length).toEqual(0);
  });

  it('should render the header plus children components', () => {
	let wrapped = shallow(
		<Presentation >
			<Counter></Counter>
		</Presentation>
	);
    expect(wrapped.find('Header').length).toEqual(1);
    expect(wrapped.find('Counter').length).toEqual(1);
  });
});
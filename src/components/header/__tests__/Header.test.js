import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
	
  it('should render two images and one h2', () => {
	let wrapped = shallow(
		<Header />
	);
    expect(wrapped.find('img').length).toEqual(2);
    expect(wrapped.find('h2').length).toEqual(1);
  });
});
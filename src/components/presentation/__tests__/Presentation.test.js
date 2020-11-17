import React from 'react';
import { mount } from 'enzyme';
import Presentation from '../Presentation';
import App from '../../App';

let wrapped = mount(
	<App>
		<Presentation />
	</App>
);
describe('Presentation', () => {
	
  it('should render the header component', () => {
    expect(wrapped.find('Header').length).toEqual(1);
  });
});
import React from 'react';
import RoundFooter from '../RoundFooter';
import { createMount } from '@material-ui/core/test-utils';
import App from '../../App'


describe('RoundFooter', () => {

	let mount;

	beforeEach(() => {
		mount = createMount();
	  });
	
	  afterEach(() => {
		mount.cleanUp();
	  });

	it('should render two buttons and one link', () => {
		let wrapped = mount( <App> <RoundFooter />  </App>);
		expect(wrapped.find('button').length).toEqual(2);
		expect(wrapped.find('Link').length).toEqual(1);
	});
});
import React from 'react';
import RoundFooter from '../RoundFooter';
import { createMount } from '@material-ui/core/test-utils';
import App from '../../App'
import { mockDispatch } from "react-redux";
import { updateWrapper } from '../../../tools/tools';

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

	it('should dispatch when clicking in play button', async () => {
		let wrapped = mount( <App> <RoundFooter />  </App>);
		expect(wrapped.find('button').at(0).simulate('click'));	
		await updateWrapper(wrapped);
		expect(mockDispatch).toHaveBeenCalledTimes(1);
	});

	it('should change state when clicking on button', () => {
		let wrapped = mount( <App> <RoundFooter />  </App>);
		expect(wrapped.find('button').at(1).simulate('click'));
		expect(wrapped.find('SweetAlert').at(0).prop('show')).toEqual(true);
	});
});
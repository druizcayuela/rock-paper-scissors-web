import React from 'react';
import { shallow } from 'enzyme';
import Round from '../Round';
import { mockState } from "react-redux";


describe('Round', () => {
	
  it('should a div with some text', () => {
	let wrapped = shallow(
		<Round />
	);
    expect(wrapped.find('div').length).toEqual(1);
    expect(wrapped.find('div').text()).toContain('PLAYER ONE');
    expect(wrapped.find('div').text()).toContain('PLAYER TWO');
    expect(wrapped.find('div').text()).toContain('RESULT');
  });

  it('should a div with the state counter as text', () => {
	mockState({
		roundResult: {
			roundsPlayed: [{
				firstPlayerChoice: 'PAPER',
				secondPlayerChoice: 'ROCK',
				result: 'DRAW',
			}]
		},
	});

	let wrapped = shallow(
		<Round />
	);
    expect(wrapped.find('div').length).toEqual(1);
    expect(wrapped.find('div').text()).toContain('PAPER');
    expect(wrapped.find('div').text()).toContain('ROCK');
    expect(wrapped.find('div').text()).toContain('DRAW');
  });
});
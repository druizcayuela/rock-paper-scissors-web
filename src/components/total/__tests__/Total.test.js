import React from 'react';
import { shallow } from 'enzyme';
import Total from '../Total';
import { mockState } from "react-redux";

describe('Total', () => {
	
  it('should have several divs with some text', () => {
	let wrapped = shallow(<Total />);
    expect(wrapped.find('.margin-top-40').length).toEqual(1);
    expect(wrapped.find('.float-left').length).toEqual(1);
    expect(wrapped.find('.result-data').length).toEqual(1);
    expect(wrapped.find('.result-data').text()).toContain('Total rounds played:');
    expect(wrapped.find('.result-data').text()).toContain('Total wins for first players:');
    expect(wrapped.find('.result-data').text()).toContain('Total wins for second players:');
	expect(wrapped.find('.result-data').text()).toContain('Total draws:');
  });

  it('should have several divs with correct data after reading state', () => {
	mockState({
		totalResult: {
			roundsPlayed: 38,
			winsFirstPlayer: 13,
			winsSecondPlayer: 16,
			totalDraws: 9
		},
	});

	let wrapped = shallow(<Total />);

    expect(wrapped.find('.result-data').text()).toContain('Total rounds played: 38');
    expect(wrapped.find('.result-data').text()).toContain('Total wins for first players: 13');
    expect(wrapped.find('.result-data').text()).toContain('Total wins for second players: 16');
	expect(wrapped.find('.result-data').text()).toContain('Total draws: 9');
  });
});
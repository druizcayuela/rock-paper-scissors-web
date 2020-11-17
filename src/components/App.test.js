import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapped = shallow(
  <App></App>
);
describe('App', () => {
  it('should render a presentation component', () => {
    expect(wrapped.find('Presentation').length).toEqual(1);
  });
});
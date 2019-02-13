import React from 'react';
import { shallow } from 'enzyme';
import Routing from '../components/Routing';
import Navigation from '../components/Navigation';

it('includes Navigation', () => {
  const app = shallow(<Routing />);
  expect(app.containsMatchingElement(<Navigation/>)).toEqual(true)
});




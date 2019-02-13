import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../components/Navigation';

import {NavLink} from 'react-router-dom'

it('renders three NavLinks', () => {
    expect(shallow(<Navigation/>).containsMatchingElement(<NavLink exact to="/" activeClassName="selected" className="link">Display Logo</NavLink>)).toEqual(true);
  });
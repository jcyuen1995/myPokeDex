import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import {BrowserRouter} from 'react-router-dom'


test('App renders without crashing', () => {
  const appComponent = shallow(<App />);
  expect(appComponent.length).toBe(1);
})
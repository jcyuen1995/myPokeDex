import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

test('renders without crashing', () => {
    const buttonComponentRender = shallow(<Header>Testing!</Header>);

    expect(buttonComponentRender.length).toBe(1);
});
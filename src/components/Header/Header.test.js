import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

test('renders without crashing', () => {
    const headerComponentRender = shallow(<Header>Testing!</Header>);

    expect(headerComponentRender.length).toBe(1);
});
import React from 'react';
import { shallow } from 'enzyme';

import Pokemon from './Pokemon';

test('renders without crashing', () => {
    const buttonComponentRender = shallow(<Pokemon>Testing!</Pokemon>);

    expect(buttonComponentRender.length).toBe(1);
});
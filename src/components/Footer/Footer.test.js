import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

test('renders without crashing', () => {
    const buttonComponentRender = shallow(<Footer>Testing!</Footer>);

    expect(buttonComponentRender.length).toBe(1);
});
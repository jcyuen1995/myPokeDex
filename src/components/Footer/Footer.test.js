import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

test('renders without crashing', () => {
    const footerComponentRender = shallow(<Footer>Testing!</Footer>);

    expect(footerComponentRender.length).toBe(1);
});
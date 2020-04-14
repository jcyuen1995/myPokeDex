import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

test('renders without crashing', () => {
    const buttonComponentRender = shallow(<Main>Testing!</Main>);

    expect(buttonComponentRender.length).toBe(1);
});
import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main';

test('renders without crashing', () => {
    const mainComponentRender = shallow(<Main>Testing!</Main>);

    expect(mainComponentRender.length).toBe(1);
});
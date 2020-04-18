import React from 'react';
import { shallow } from 'enzyme';

import Pokemon from './Pokemon';

test('renders without crashing', () => {
    const pokemonComponentRender = shallow(<Pokemon>Testing!</Pokemon>);

    expect(pokemonComponentRender.length).toBe(1);
});
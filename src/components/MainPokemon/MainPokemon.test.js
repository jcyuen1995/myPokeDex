import React from 'react';
import { shallow } from 'enzyme';

import MainPokemon from './MainPokemon';

test('renders without crashing', () => {
    const buttonComponentRender = shallow(<MainPokemon>Testing!</MainPokemon>);

    expect(buttonComponentRender.length).toBe(1);
});
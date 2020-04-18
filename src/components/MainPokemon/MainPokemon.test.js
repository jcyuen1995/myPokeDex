import React from 'react';
import { shallow } from 'enzyme';

import MainPokemon from './MainPokemon';

test('renders without crashing', () => {
    const mainPokemonComponentRender = shallow(<MainPokemon>Testing!</MainPokemon>);

    expect(mainPokemonComponentRender.length).toBe(1);
});
import React from 'react';
import PropTypes from 'prop-types';

import './Main.css'

import Pokemon from '../Pokemon/Pokemon';

const Main = (props) => {   
    const {pokemonList, getPokemon} = props;

    return (
        <div className = "container">
            <h2>Kanto Pokémon</h2>
            <div className = "grid-container">
            {pokemonList.map((pokemon)=>{
                return (
                <div className = "grid-item" key={pokemon.name}> 
                    <Pokemon 
                        pokemonURL = {pokemon.url}
                        getMainPoke = {getPokemon}
                    />
                </div>
                )
            })}
            </div>
        </div>
    );
};

//default props never executed. Main will always be passed an empty array and default props will only execute if the vaule of props is null(not given)
//the default prop is already set in the App.js line 10 with useState([]) setting PokemonList to empty array.  todo : change useState([]) in line 10 of App.js to useState({})

//provide no name and a random text as a url in order so that before grabbing apis the appilcation doesn't crash
//status code error occurs because there are still api calls rendering and I provided a blank url or fake text as url in order to keep the application from crashing.
Main.defaultProps = {
    pokemonList: [{name: 'N/A', url: 'N/A'}],
    getPokemon: () => console.log('No function associated with this event.')
}

Main.propTypes = {
    pokemonList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
    })),
    getPokemon: PropTypes.func
}


export default Main;
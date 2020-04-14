import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Pokemon.css';

import Spinner from 'react-bootstrap/Spinner';

const Pokemon = (props) => {

    const {pokemonURL, getMainPoke} = props;
    //grab only name and sprite fro mthe data 
    const [pokemon, getPokemon] = useState([{sprites: '', name: '', stats: [{}]}]);

    useEffect(()=> {
        //api call for sprites
        if (pokemonURL === 'N/A') {
            console.log("Failed to Load Api")
        } else {
        axios.get(`${pokemonURL}`).then((response) =>{
            setTimeout(()=> {
                getPokemon({
                    sprites: response.data.sprites.front_default, 
                    name: response.data.name,
                    stats: response.data.stats
                }, 8000)
            });
        });}
    },[pokemonURL, getMainPoke])

    return (
        
        <div className = "pokemon">
            {/* 
                loading spinner 
                to do: make loading spinner component
            
            */}
            {pokemon.length === 1 && (
                <>
                
                <div className = "spinner-pokemon">
                    <Spinner animation="border" role="status" size = "sm">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
                <p>Loading...</p>
                </>
            )}
            <Link 
                to = {`/${pokemon.name}`} 
                style={{ textDecoration: 'none' }} 
                onClick = {()=> getMainPoke(pokemon.name, pokemonURL)}
                >
                <img src = {pokemon.sprites} alt = {pokemon.name}></img>
                <p>{pokemon.name ? `${pokemon.name}`.replace('n-m', 'n ♂').replace('-f', ' ♀').replace('-', ' ') : pokemon.name}</p>
            </Link>
        </div>
    );
};

//never executed. Pokemon will always be passed an empty array and default props will only execute if the vaule of props is null(not given)
Pokemon.defaultProps = {
    pokemonURL: 'N/A',
    getMainPoke: () => console.log('No function associated with this event.')
}

Pokemon.propTypes = {
    pokemonURL: PropTypes.string,
    getMainPoke: PropTypes.func
}
export default Pokemon;
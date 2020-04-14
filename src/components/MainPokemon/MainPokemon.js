import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';

import './MainPokemon.css'

const MainPokemon = (props) => {

    const {url} = props;
    const [pokemon, getPokemonInfo] = 
    useState({
        name: '', 
        sprite_front: '', 
        sprite_back: '',
        sprite_shiny_front: '',
        sprite_shiny_back: '',
        stats: [{}],
        height: '',
        weight: '',
        base_exp: '',
        id: '',
        types: []
    });
    
    useEffect(()=> {
        // api call forv pokemonInfo
        axios
        .get(`${url}`)
        .then((response) =>  {
            setTimeout(()=> {
            getPokemonInfo({
                name: response.data.name, 
                sprite_front: response.data.sprites.front_default, 
                sprite_back: response.data.sprites.back_default,
                sprite_shiny_front: response.data.sprites.front_shiny,
                sprite_shiny_back: response.data.sprites.back_shiny,
                stats: response.data.stats,
                height: response.data.height,
                weight: response.data.weight,
                base_exp: response.data.base_experience,
                id: response.data.id,
                types: response.data.types
            });
            },1000)
        });
    }, [url]);
    // to do: split the page into multiple components: ex statsTable and attributesTable
    return (
        <div className = {`mainPoke 
            ${pokemon.id==='' && pokemon.name === '' ? "loading" : ""}`
            }>
            {/* 
                Loading Spinner
                to do : create loading spinner class
            */}
            {pokemon.id === '' && pokemon.name === '' ?
                <div className = "mainPokemon">
                    <div className = "spinner-mainPokemon">
                        <Spinner animation="border" role="status" size = "sm">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                    <p>Loading...</p>
                </div>

            :
                <>
                <h2>{pokemon.name}</h2>
                {/* sprites */}
                <div className = "sprites">
                    <figure>
                        <img src = {pokemon.sprite_front} alt = {pokemon.name}></img>
                        <figcaption>Front Default</figcaption>
                    </figure>
                    <figure>
                        <img src = {pokemon.sprite_shiny_front} alt = {pokemon.name}></img>
                        <figcaption>Front Shiny</figcaption>
                    </figure>
                    <figure>
                        <img src = {pokemon.sprite_back} alt = {pokemon.name}></img>
                        <figcaption>Back Default</figcaption>
                    </figure>
                    <figure>
                        <img src = {pokemon.sprite_shiny_back} alt = {pokemon.name}></img>
                        <figcaption>Back Shiny</figcaption>
                    </figure>
                </div>
                {/* attributes table */}
                <table className = "info table table-bordered">
                    <thead className = "thead-dark">
                        <tr>
                            <th className = "infoBar" colSpan = "4">Info</th>
                        </tr>
                    </thead>
                    <tbody className = "table-striped">
                        <tr>
                            <th rowSpan = "6" className = "attributes" style = {{verticalAlign: "middle"}}>Attributes</th>
                        </tr>
                        <tr>
                            <th>Pokemon No.</th>
                            <td colSpan = "2"># {pokemon.id}</td>
                        </tr>
                        <tr>
                            <th className = "type" colSpan = "1">Types</th>
                                {
                                    pokemon.types.length === 0 ? 
                                    <td colSpan = "2">Loading...</td> :
                                    pokemon.types.map(e => { 
                                    return (
                                        <td colSpan = "1"key = {e.type.name}>{e.type.name}</td>
                                    )})
                                }
                        </tr>
                        <tr>
                            <th>Height</th>
                            <td colSpan = "2">{pokemon.height}</td>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <td colSpan = "2">{pokemon.weight}</td>
                        </tr>
                        <tr>
                            <th>Base Experience</th>
                            <td colSpan = "2">{pokemon.base_exp}</td>
                        </tr>
                    </tbody>
                </table>
                {/* stats table */}
                <table className = "stats table table-bordered">
                    <thead className = "thead-dark">
                        <tr>
                            <th colSpan = "3">Stats</th>
                        </tr>
                    </thead>
                    <tbody className = "table-striped">
                        <tr className = "table-active">
                            <th scope = "col">Stat Name</th>
                            <th scope = "col">Base Stat</th>
                            <th scope = "col">Effort</th>
                        </tr>
                        { pokemon.stats.length === 1 ? <tr><th>Loading...</th></tr>:
                        pokemon.stats.map(stat=> {
                            return (
                                <tr key = {stat.stat.name}>
                                    <td className = "stats">{`${stat.stat.name}`.replace('-', ' ')}</td>
                                    <td> {stat.base_stat}</td>
                                    <td>{stat.effort}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* back button */}
                <Button 
                    component={Link} 
                    to="/" 
                    variant = "outlined"
                    size = "large"
                >
                    Back
                </Button>
                </>
            }
        </div>
    );
};

MainPokemon.defaultProps = {
    url: 'N/a'
}

MainPokemon.propTypes = {
    url: PropTypes.string
}

export default MainPokemon;
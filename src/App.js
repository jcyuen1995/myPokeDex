import React, { useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Sound from 'react-sound'
// import Spinner from 'react-bootstrap/Spinner';

import './App.css';
import theme from './rsc/route1.mp3'
//mp3 file from http://www.gamethemesongs.com/Pokemon_BlueRed_-_Route_1.html

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MainPokemon from './components/MainPokemon/MainPokemon';
import Footer from './components/Footer/Footer'




function App() {
  //set initial pokemonList state
  //the pokemon list is always going to be an empty array and so either the api loads or the pokemonList is an empty array that is passed into Main which will not fire the defaultprops because pokemonList is still being passed an argument
  const [pokemonList, getPokemonList] = useState([]);
  const [mainPoke, getMainPoke] = useState({name: '', url: ''});
  const [clicked, getClicked] = useState(false)

  const getPokemon = (poke, pokemonURL) => {
      getMainPoke({name:poke, url: pokemonURL}) 
  }

  useEffect(()=> {
    // api call for list of 151 pokemon
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151/')
      .then((response) =>  {
        setTimeout(()=> {
          getPokemonList(response.data.results);
        },10)
    });
  }, []);

  // used for the music button on/off
  const userInteractionFound = () => {
    getClicked(!clicked);
  }

  return (
    <div className="App">
      {/* hotfix for footer to stay at bottom */}
      <div style = {{position: "relative", width: "100vw", minHeight: "100vh"}}
      >  
        {/* plays route 1 theme on loop  */}
        <Sound
          url = {theme}
          loop = {true}
          playStatus={clicked ? Sound.status.PLAYING : Sound.status.STOPPED}
        />
        <Header click = {userInteractionFound} isClicked = {clicked}/>
          <Switch>
            <Route exact path = "/">
              <Main 
                pokemonList = {pokemonList.length !== 0 ? pokemonList : undefined} 
                getPokemon = {getPokemon}
                />
                
              {/* loading spinner not needed because make app looks ugly
              {pokemonList.length === 0 && (
                <div className = "spinner">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              )} */}
            </Route>
            <Route exact path = {`/${mainPoke.name}`}>
              <MainPokemon url = {mainPoke.url}/>
            </Route>
          </Switch>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

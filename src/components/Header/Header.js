import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import './Header.css';

const Header = (props) => {
    const { isClicked, click } = props;
    return (
        <div className = "stick">
            <nav className = "navbar navbar-expand-lg myNav">
                <Link to='/' style={{ textDecoration: 'none' }} ><h1 className = "nav-brand">Pokédex</h1></Link>
                <button className = "music">
                    {isClicked ? 
                    <span className="material-icons" onClick = {click}>
                    music_note
                    </span> : 
                    <span className="material-icons" onClick = {click}>
                    music_off
                    </span>
                    }
                </button>
            </nav>
        </div>
    );
};
Header.defaultProps = {
    isClicked: false,
    click: () => console.log('failed to load function')
}
Header.propTypes = {
    isClicked: PropTypes.bool,
    click: PropTypes.func
}
export default Header;
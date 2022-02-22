import logo2 from './assets/gif/logo2.gif';
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo2} alt="logo" height="50" width="50"/>
            <h1>askAway!</h1>

            <div>
            <Link to="/tagging"><u>Tagging</u></Link>|
            <Link to="/similarity"><u>Similarity</u></Link>
            </div>
        </nav>
    );
}
export default Navbar;
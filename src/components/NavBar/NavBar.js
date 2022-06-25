import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';



export default function NavBar() {
    return (
        <header className="navbar">
            <h1 className="titleApp">
                MOVIES - APP
            </h1>

            <nav>
                <div className="list">
                    <NavLink exact to="/" className="titleNav" >Home</NavLink>
                    <NavLink to="/favs" className="titleNav" >Favoritas</NavLink>
                </div>
            </nav>
        </header>
    )
}
import React from 'react';
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Quotes</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">New Blog</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;

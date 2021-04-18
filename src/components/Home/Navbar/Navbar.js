import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul class="nav justify-content-center nav-element">
            <li class="nav-item">
                <Link class="nav-link" to="/home">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/about">About us</Link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/dashboard">Admin</a>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/blog">Blogs</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact us</Link>
            </li>
        </ul>
    );
};

export default Navbar;
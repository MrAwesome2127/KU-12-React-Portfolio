import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const currentPage = location.pathname;
    return (
        <header class="hero-banner">
            <h1>Tim Velasquez</h1>
            <nav>
                <Link 
                    to="/" 
                    data-active={currentPage === '/' ? 'true' : 'false'}>
                    About
                </Link>
                <Link 
                    to="/portfolio" 
                    data-active={currentPage === '/portfolio' ? 'true' : 'false'}>
                    Portfolio
                </Link>
                <Link 
                    to="/contact" 
                    data-active={currentPage === '/contact' ? 'true' : 'false'}>
                    Contact
                </Link>
                <Link 
                    to="/resume" 
                    data-active={currentPage === '/resume' ? 'true' : 'false'}>
                    Resume
                </Link>
            </nav>
        </header>
    );
};

export default Header;
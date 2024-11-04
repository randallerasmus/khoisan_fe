// NavBar.tsx
import React from 'react';
import './NavBar.css';
import Link from "next/link";

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">Khoi-san</h1>
            <ul className="navbar-links">
                <li><Link href="/">Home</Link></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;

import React, { useState } from "react";

function Header() {
const [menuOpen, setMenuOpen] = useState(false);

return (
    <header className="header">
    <div className="container">
        <div className="logo">
        <a href="/mo" className="mo">MO</a>
        </div>
        <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        </li>
        <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        </li>
        <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>
        <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
        </ul>
    </div>
    </header>
);
}

export default Header;

import React, { useState } from 'react';
import "./header.css"

const Header = () => {
  const[Toggle, showMenu] = useState(false);
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className='nav__logo'>SiBots</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className='nav__list'>
                        <a href="#home" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i>
                            Home 
                        </a>
                    </li>

                    <li className='nav__list'>
                        <a href="#about" className="nav__link">
                            <i className="uil uil-briefcase nav__icon"></i> 
                            About Us
                        </a>
                    </li>

                    <li className='nav__list'>
                        <a href="#products" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>
                            Products 
                        </a>
                    </li>

                    <li className='nav__list'>
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>
                            Contact Us
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header
/*
    ./src/components/header/HeaderNav.jsx
*/
import React from 'react';
import './HeaderNav.css';

export default class HeaderNav extends React.Component {
    render() {
        return (
            <ul id='headernav' className='header-nav'>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#about_me">About Me</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#experiences">Experiences</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#abilities">Abilities</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#projects">Projects</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#hobbies">Hobbies</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#contact">Contact</a>
                </li>
            </ul>
        );
    }
}


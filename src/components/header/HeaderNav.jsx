/*
    ./src/components/HeaderNav.jsx
*/
import React from 'react';
import '../../css/HeaderNav';

export default class HeaderNav extends React.Component {
    render() {
        return (            
            <ul id='headernav' className='header-nav'>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#about_me">About Me</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#">Experiences</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#">Abilities</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#">Hobbies</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#">Contact</a>
                </li>
            </ul>   
        );
    }
}

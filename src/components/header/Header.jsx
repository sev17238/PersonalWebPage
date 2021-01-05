/*
    ./src/components/Header.jsx
*/
import React from 'react';
import HeaderNav from './HeaderNav/HeaderNav';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header id='navbar' className='header'>
                <div id='headercontent' className='header-content'>
                    <div className='header-content-left'>
                        <div className='header-content-left-in'> 
                            <div className="DS-div">
                                <p><a href="#">DS</a></p>
                            </div>
                        </div> 
                    </div>
                    <div className='header-content-right'>
                        <HeaderNav/>
                    </div> 
                </div>
            </header>
        );
    }
}
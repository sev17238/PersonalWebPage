/*
    ./src/components/Header.jsx
*/
import React from 'react';
import HeaderNav from './HeaderNav';
import '../../css/Header';
//import '../../css/global';

export default class Header extends React.Component {
    /*constructor(props) {
        super(props);
        this.className = props.className;
    }*/


    render() {
        return (
            <header id='navbar' className='header'>
                <div id='headercontent' className='header-content'>
                    <div className='header-content-left'>
                        <div className='header-content-left-in'> 
                            <div className="DS-div">
                                <p>DS</p>
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
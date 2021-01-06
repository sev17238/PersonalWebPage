/*
    ./src/components/Experiences.jsx
*/
import React from 'react';
import './Abilities.css';
import AbModule from './AbilitiesModule/AbilitiesModule';
import { Row, Col } from 'reactstrap';

export default class Abilities extends React.Component {

    render() {
        return (
            <section>
                <div id='abilities' className='Abilities'>
                    <div className='innerDivAbilities'>
                        <h3 className='title-ab'>Abilities</h3>
                        <div className='div2-ab'>
                            <div ><h4 className='subtitle-ab'>Software</h4></div>
                            <Row className='row-ab'>
                                <Col xs="6" className='col-ab'>
                                    <ul className='ul-ab'>
                                        <AbModule skill='HTML' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='MidnightBlue'/>                                    
                                        <AbModule skill='Java' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='MidnightBlue'/>
                                        <AbModule skill='C#' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='MidnightBlue'/>                                    
                                        <AbModule skill='CSS' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='CadetBlue'/>                                    
                                        <AbModule skill='Python' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='CadetBlue'/>
                                        <AbModule skill='Javacript' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/>
                                        <AbModule skill='SASS/SCSS' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/>
                                        <AbModule skill='C++' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/>
                                    </ul>
                                </Col>
                                <Col xs="6">
                                    <ul  className='ul-ab'>
                                        <AbModule skill='OOP' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='MidnightBlue'/>
                                        <AbModule skill='Postgresql' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='MidnightBlue'/>
                                        <AbModule skill='MySQL' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='CadetBlue'/>
                                        <AbModule skill='SCRUM' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/>
                                        <AbModule skill='UML' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/>
                                        <AbModule skill='React' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/>
                                        <AbModule skill='Webpack' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/>
                                        <AbModule skill='MongoDB' color1='MidnightBlue' color2='MidnightBlue' color3='CadetBlue' color4='CadetBlue' color5='CadetBlue' color6='CadetBlue'/>
                                    </ul>
                                </Col>
                            </Row>
                            <div className='div-line-ab'></div>
                            <div ><h4 className='subtitle-ab'>Electronics</h4></div>
                            <Row className='row-ab'>
                                <Col xs="6" className='col-ab'>
                                    <ul className='ul-ab'>   
                                        <AbModule skill='Digital electronics' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='MidnightBlue'/>
                                        <AbModule skill='Analog electronics' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='CadetBlue'/>                                    
                                        <AbModule skill='PIC' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/>
                                        <AbModule skill='Arduino' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/> 
                                        <AbModule skill='RaspBerry Pi 3' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='CadetBlue' color5='CadetBlue' color6='CadetBlue'/> 
                                    </ul>
                                </Col>
                                <Col xs="6">
                                    <ul  className='ul-ab'>
                                        <AbModule skill='Cisco Switches' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='MidnightBlue'/>                                    
                                        <AbModule skill='Cisco Routers' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='CadetBlue'/>
                                        <AbModule skill='Network programming' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/>                                     
                                        <AbModule skill='Ethernet' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/>   
                                    </ul>
                                </Col>
                            </Row>
                            <div className='div-line-ab'></div>
                            <div ><h4 className='subtitle-ab'>Lenguajes</h4></div>
                            <Row className='row-ab'>
                                <Col xs="6" className='col-ab'>
                                    <ul className='ul-ab'>   
                                        <AbModule skill='Spanish' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='MidnightBlue'/>                                   
                                    </ul>
                                </Col>
                                <Col xs="6">
                                    <ul  className='ul-ab'>
                                        <AbModule skill='English' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/>                                 
                                    </ul>
                                </Col>
                            </Row>
                            <div className='div-line-ab'></div>
                            <div ><h4 className='subtitle-ab'>Tools</h4></div>
                            <Row className='row-ab'>
                                <Col xs="6" className='col-ab'>
                                    <ul className='ul-ab'>   
                                        <AbModule skill='Unity3D' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='MidnightBlue'/>
                                        <AbModule skill='Blender' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='MidnightBlue'/>                                    
                                        <AbModule skill='MS Office' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='CadetBlue'/>
                                        <AbModule skill='GitHub' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='CadetBlue'/> 
                                        <AbModule skill='FireFox' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='CadetBlue'/> 
                                        <AbModule skill='Chrome' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='CadetBlue'/> 
                                    </ul>
                                </Col>
                                <Col xs="6">
                                    <ul  className='ul-ab'>
                                        <AbModule skill='Adobe Photoshop' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='MidnightBlue'/>   
                                        <AbModule skill='Adobe Illustrator' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='MidnightBlue'/>                                 
                                        <AbModule skill='Adobe Premier Pro' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='CadetBlue'/>                                   
                                        <AbModule skill='Visual Studio Code' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='CadetBlue'/>  
                                        <AbModule skill='Windows' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='MidnightBlue' color6='CadetBlue'/>
                                        <AbModule skill='Linux' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='MidnightBlue' color5='CadetBlue' color6='CadetBlue'/>                                
                                        <AbModule skill='Android Studio' color1='MidnightBlue' color2='MidnightBlue' color3='MidnightBlue' color4='CadetBlue' color5='CadetBlue' color6='CadetBlue'/> 
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
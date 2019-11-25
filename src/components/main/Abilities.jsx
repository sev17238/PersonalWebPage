/*
    ./src/components/Experiences.jsx
*/
import React from 'react';
import '../../css/Abilities';
import AbModule from './AbilitiesModule';
import { /*Container, */Row, Col } from 'reactstrap';

export default class Abilities extends React.Component {
    /*constructor(props) {
        super(props);
        this.className = props.className;
    }*/


    render() {
        return (
            <section>                
                <div id='abilities' className='div1-ab'>
                    <div  className='div-title-ab'><h3 className='title-ab'>Abilities</h3></div>
                    <div className='div2-ab'>   
                        <div ><h4 className='subtitle-ab'>Programming</h4></div>
                        <Row className='row-ab'>
                            <Col xs="6" className='col-ab'>
                                <ul className='ul-ab'>
                                    <AbModule skill='Java' color1='Black' color2='Black' color3='Black' color4='Black' color5='Black' color6='Black'/>
                                    <AbModule skill='Python' color1='Black' color2='Black' color3='Black' color4='Black' color5='Black' color6='CadetBlue'/>
                                </ul>                                
                            </Col>
                            <Col xs="6">
                                <ul  className='ul-ab'>
                                    <AbModule skill='React' color1='Black' color2='Black' color3='Black' color4='Black' color5='Black' color6='Black'/>
                                    <AbModule skill='Webpack' color1='Black' color2='Black' color3='Black' color4='Black' color5='Black' color6='Black'/>
                                </ul>
                            </Col>
                        </Row>
                        <div ><h4 className='subtitle-ab'>Electronics</h4></div>
                    </div>               
                </div>
                

            </section>

        );
    }
}
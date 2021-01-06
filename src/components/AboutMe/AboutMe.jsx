/*
    ./src/components/main/AboutMe
*/
import React from 'react';
import './AboutMe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { /*Container, */Row, Col } from 'reactstrap';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

import Quote from '../Quote/Quote';

const Me = require('../../images/MePiano.jpeg');

export default class AboutMe extends React.Component {
    render() {
        return (
            <section className='section-AboutMe'>
                <div id="about_me" className='AboutMe'>
                    <div className='inner-div-AboutMe'>
                        <h3 className='title-AboutMe'>About me</h3>
                        <Row className='row'>
                            <Col className='column-left'>
                                <Slide left>
                                    <div className='column-div'>
                                        <h4 className='h4-am'>Name: </h4>
                                        <p className='p-am'>Diego Sevilla </p>
                                        <h4 className='h4-am'>Age: </h4>
                                        <p className='p-am'>23 </p>
                                        <h4 className='h4-am'>Location: </h4>
                                        <p className='p-am'>Guatemala City, Guatemala </p>
                                    </div>
                                </Slide>
                            </Col>
                            <Col className='column-center'>
                                <Zoom>
                                    <div className='div-image'>
                                        <img src={Me} className='image-me' alt="me"/>
                                    </div>
                                </Zoom>
                            </Col >
                            <Col className='column-right'>
                                <Slide right>
                                    <div className='column-div-2'>
                                        <p className='p-am-des'>I&lsquo;m currently studying Computing Science Engeeniring
                                        at <a className='anchor-am' href='https://www.uvg.edu.gt/'>Universidad del Valle de Guatemala</a>. I have this habit of being a perfectionist in 
                                        all the things I do, I like to spend time working on small details and giving my best to solve problems.
                                        </p>
                                    </div>
                                </Slide>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Quote quote='"Talent is just a myth, you only need practice."' author='- Diego Sevilla, 2020'/>
            </section>
        );
    }
}
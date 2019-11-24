/*
    ./src/components/AboutMe
*/
import React from 'react';
import '../../css/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import { /*Container, */Row, Col } from 'reactstrap';

const Me = require('../../images/MePiano.jpeg');

export default class AboutMe extends React.Component {
    render() {
        return (
            <section>
                <div id="about_me" className='div1-am'>
                    <h3 className='title-am'>About me</h3>
                    <Row>
                        <Col className='columns'>
                            <p className='p-am-des'>I&lsquo;m currently studying Computing Science Engeeniring
                             at <a href='https://www.uvg.edu.gt/'>Universidad del Valle de Guatemala</a>. I have this habit of being a perfectionist in 
                             all the things I do, I like to spend time working on small details and giving my best to solve problems.
                            </p>
                        </Col>
                        <Col className='columns'>
                            <div className='div-image'>
                                <img src={Me} className='image-me' alt="me"/>
                            </div>
                        </Col >
                        <Col className='columns'>
                            <h4 className='h4-am'>Name: </h4>
                            <p className='p-am'>Diego Sevilla </p>
                            <h4 className='h4-am'>Age: </h4>
                            <p className='p-am'>22 </p>
                            <h4 className='h4-am'>Location: </h4>
                            <p className='p-am'>Guatemala City, Guatemala </p>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}
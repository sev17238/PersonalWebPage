/*
    ./src/components/main/Projects.jsx
*/
import React from 'react';
import '../../css/Projects.css';
import { /*Container, */Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Fade from 'react-reveal/Fade';

const ukron = require('../../images/ukron.PNG')
const undercooked = require('../../images/UnderCooked_.png')
const ibanez = require('../../images/ibanez.PNG')
const software = require('../../images/ukron.PNG')


export default class Projects extends React.Component {

    render() {
        return (
            <section>
                <div id='projects' className='div1-pro'>
                    <div  className='div-title-pro'><h3 className='title-pro'>Projects</h3></div>
                    <div className='div2-pro'>                       
                        <Row className='row-exp'>
                            <Col xs="5" className='Fst-col'>
                                <Fade>
                                    <Card>
                                        <CardImg top width="50%" src={undercooked} alt="Card image cap" />
                                        <CardBody>
                                        <CardTitle>Undercooked</CardTitle>
                                        <CardSubtitle>Overcooked clone</CardSubtitle>
                                        <CardText>Undercooked is a clone of Overcooked the videogame. This project was part of Advanced 
                                            Videogame programming course in Universidad del Valle.
                                        </CardText>
                                        <Button href='https://diego-sevilla.itch.io/undercooked-cookitnow'>See Project</Button>
                                        </CardBody>
                                    </Card>  
                                </Fade>
                            </Col>
                            <Col xs="5" className='Snd-col'>
                                <Fade>
                                    <Card>
                                        <CardImg top width="100%" src={ibanez} alt="Card image cap" />
                                        <CardBody>
                                        <CardTitle>Ibanez Guitars</CardTitle>
                                        <CardSubtitle>Ibanez Guitars Website Clone</CardSubtitle>
                                        <CardText>This project was part of Web Systems and Technologies course in Universidad del Valle.
                                            The goal was to copy the style of a website.
                                        </CardText>
                                        <Button href='https://github.com/sev17238/Project1_WebPage'>See Project</Button>
                                        </CardBody>
                                    </Card>
                                </Fade>
                            </Col>
                        </Row>
                        <Row className='row-exp'>
                            <Col xs="5" className='Fst-col'>
                                <Fade>
                                    <Card>
                                        <CardImg top width="100%" src={ukron} alt="Card image cap" />
                                        <CardBody>
                                        <CardTitle>Ukron</CardTitle>
                                        <CardSubtitle>The videogame</CardSubtitle>
                                        <CardText>This videogame was part of Advanced Videogame Programming course. Ukron
                                            is an indi game where you can shoot enemies, take wepons and much more.
                                        </CardText>
                                        <Button href='https://diego-sevilla.itch.io/ukron'>See Project</Button>
                                        </CardBody>
                                    </Card> 
                                </Fade>                                                
                            </Col>
                            <Col xs="5" className='Snd-col'>
                                
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        );
    }
}
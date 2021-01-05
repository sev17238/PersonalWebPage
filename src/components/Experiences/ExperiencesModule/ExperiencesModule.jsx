/*
    ./src/components/main/ExpModule.jsx
*/
import React from 'react';
import './ExperiencesModule.css';
import { /*Container, */Row, Col } from 'reactstrap';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

export default class ExpModule extends React.Component {
    constructor(props){
        super(props)
        this.Name = props.Name;
        this.Date = props.Date;
        this.Acknowledgment = props.Acknowledgment;
        this.Description = props.Description;
        this.src = props.src;
    }

    render() {
        return (
            <Aux>
                <div  className='div1-modexp'>
                    <Row className='row-exp'>
                        <Col xs="4" className='Fst-col'>
                            <p className='edu-name p-color'>{this.Name}</p>
                            <p className='p-normal p-color'>{this.Date}</p>
                            <div className='div-image-exp'>
                                <img className='image-exp' src={this.src} alt='img'></img>  
                            </div>
                        </Col>
                        <Col xs="6" className='Snd-col'>
                            <p className='edu-ack p-color'>{this.Acknowledgment}</p>
                            <p className='p-normal p-color'>{this.Description}</p>
                        </Col>
                    </Row>
                </div>
            </Aux>
        );
    }
}
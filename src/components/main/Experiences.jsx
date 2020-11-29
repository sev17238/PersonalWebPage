/*
    ./src/components/main/Experiences.jsx
*/
import React from 'react';
import '../../css/Experiences.css';
import ModExp from './ExpModule';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';

const school = require('../../images/Icons/school.png');
const gears = require('../../images/Icons/gears.png');
const code = require('../../images/Icons/code.png');
const music = require('../../images/Icons/music.png');
const circuit = require('../../images/Icons/circuit.png');

export default class Experiences extends React.Component {
    /*constructor(props) {
        super(props);
        this.className = props.className;
    }*/

    render() {
        return (
            <section>
                <div id='experiences' className='div1-exp'>
                    <div  className='div-title-exp'><h3 className='title-exp'>Experiences</h3></div>
                    <div className='div2-exp'>                       
                        <div ><h4 className='edu-exp'>Education</h4></div>
                        <Flip bottom>
                            <ModExp 
                                Name='Colegio Capouilliez' 
                                Date='Jan 2003 - Oct 2013' 
                                Acknowledgment='Primary and Middle School Studies' 
                                Description="I spent almost 10 years in this lovely school when I was a child. 
                                I remember I used to love Natural Science classes about the human body and cells. 
                                I will always remember going to the musical appreciation class
                                where my teacher played funny piano songs for all the class."
                                src={school}>                        
                            </ModExp>
                        </Flip>    
                        <Flip bottom>
                            <ModExp 
                                Name='Instituto Tecnico Laboral Kinal' 
                                Date='Jan 2014 - Nov 2016' 
                                Acknowledgment='Industrial Electronics Technician' 
                                Description="Kinal is a well known high school in Guatemala because of it's dicipline, good
                                work and trained students. I studied here for 3 years and I learned about electronics, mechanics and
                                basic programing. In my third year of school I realized that I wanted to know more about software 
                                and programming."
                                src={circuit}>                        
                            </ModExp>
                        </Flip>   
                        <Flip bottom>
                            <ModExp 
                                Name='Universidad del Valle de Guatemala' 
                                Date='Jan 2017 - Nov 2022 (expected graduation date)' 
                                Acknowledgment='Computer Science and Information Technologies Engineer' 
                                Description="I'm currently in my third year of education in this university and I think
                                the way of learning has a combination of different approaches as User Experience, 
                                Security, long term maintenance and more. I have learned about JAVA, Python, C#, SQL, 
                                Javascript, Web Technologies and to use lots of useful tools to get along well with all this stuff."
                                src={code}>                        
                            </ModExp>
                        </Flip>    
                        <Flip bottom>
                            <ModExp 
                                Name='Conservatorio Nacional de Música (Guatemala)' 
                                Date='Jan 2013 - Nov 2016' 
                                Acknowledgment='Elementary musical training with a specialization in piano' 
                                Description="I studied here for more than 4 years and I learned about the essential 
                                concepts of music theory and harmony. I learned to play the piano as well and
                                participated in several recitals."
                                src={music}>                        
                            </ModExp>
                        </Flip>    
                        <div className='div-line'></div>
                        <div><h4 className='edu-exp'>Work Experience</h4></div>  
                        <LightSpeed left>
                            <ModExp 
                                Name='DACSA' 
                                Date='Jun 2016 - Nov 2016' 
                                Acknowledgment='Full Time - Electronic Technician' 
                                Description="DACSA is a custom label printer in Guatemala city. As part of Kinal's 
                                graduating process I had to work here for about 4 months, fixing diferent kinds of 
                                electronic devices as electronic balances, sealers, labellers and more. It was a good 
                                experience realize how it is to have a full time job."
                                src={gears}>                        
                            </ModExp>
                        </LightSpeed>                      
                    </div>
                </div>
            </section>

        );
    }
}

/*
Later on, I got interested in popular music
                                and leaned guitar by my own with online lessons. Now I´m perfeccionating my guitar skills and 
                                also my singing skills.
*/
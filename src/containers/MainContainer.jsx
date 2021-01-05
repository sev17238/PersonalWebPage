/*
    ./src/components/Container.jsx
*/
import React,{Component} from 'react';
import './MainContainer.css';

import AboutMe from '../components/AboutMe/AboutMe';
import Quote from '../components/Quote/Quote';
import Experiences from '../components/Experiences/Experiences';
import Abilities from '../components/Abilities/Abilities';
import Projects from '../components/Projects/Projects';

import Aux from '../hoc/Auxiliary/Auxiliary';

import { Parallax} from 'react-parallax';
import Zoom from 'react-reveal/Zoom';


class Container extends Component {

    render() {
        return (
            <Aux>
                <Parallax
                    blur={0}
                    bgImage={require('../images/skyme.JPG')}
                    bgImageAlt="Skyme"
                    strength={200}>
                    <Zoom>
                        <div className='divv1-cloud'>
                            <Zoom cascade>
                                <div className='divv2-center-cloud'>
                                    <div className='cloud1'></div>
                                    <div className='cloud2'></div>
                                    <p className="NameIntro">Great View!</p>
                                    <p className="Name">Isn&lsquo;t it?</p>
                                </div> 
                            </Zoom>
                        </div>
                    </Zoom>
                </Parallax>
                {/*main */}
                <AboutMe/>
                <Quote quote='"Talent is just a myth, you only need practice."' author='- Diego Sevilla, 2020'/>
                <Experiences/>
                <Abilities/>
                <Projects/>
                <Parallax
                    blur={0}
                    bgImage={require('../images/piano-guitar_purple.jpg')}
                    bgImageAlt="Hobbies"
                    strength={300}>
                    <Zoom>
                        <div className='div1-hobbies'>
                            <Zoom>
                                <div id='hobbies' className='div2-center-hobbies'>
                                    <p className="p-hobbies">HOBBIES!!!</p>
                                </div> 
                            </Zoom>
                        </div>
                    </Zoom>
                    <Parallax
                        blur={0}
                        bgImage={require('../images/crowd2.png')}
                        bgImageAlt="crowd"
                        strength={100}>
                        <div style={{height: '20em'}}></div>
                    </Parallax>
                </Parallax>
                {/*main */}
            </Aux>
        );
    }
}

export default Container; 
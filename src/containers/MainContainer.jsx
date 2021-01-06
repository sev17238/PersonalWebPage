/*
    ./src/components/Container.jsx
*/
import React,{Component} from 'react';

import ViewIntro from '../components/ViewIntro/ViewIntro';
import AboutMe from '../components/AboutMe/AboutMe';
import Quote from '../components/Quote/Quote';
import Experiences from '../components/Experiences/Experiences';
import Abilities from '../components/Abilities/Abilities';
import Projects from '../components/Projects/Projects';
import Hobbies from '../components/Hobbies/Hobbies';

import Aux from '../hoc/Auxiliary/Auxiliary';

class Container extends Component {
    render() {
        return (
            <Aux>
                <ViewIntro/>
                <AboutMe/>
                <Experiences/>
                <Abilities/>
                <Projects/>
                <Hobbies/>
            </Aux>
        );
    }
}

export default Container; 
/*
    ./src/components/Experiences.jsx
*/
import React from 'react';
import '../../css/Quote';
import Pulse from 'react-reveal/Pulse';

export default class Experiences extends React.Component {
    /*constructor(props) {
        super(props);
        this.className = props.className;
    }*/


    render() {
        return (
            <section>                
                <div className='div-quote'>
                    <div className='div-quote-in'>
                        <Pulse>
                            <p className='p-quote'>
                                "Talent is just a myth, you only need practice."
                            </p>
                            <p className='p-quote-ref'>
                                - Diego Sevilla, 2019
                            </p>
                        </Pulse>
                    </div>
                </div>                
            </section>

        );
    }
}
/*
    ./src/components/Experiences.jsx
*/
import React from 'react';
import './Quote.css';
import Pulse from 'react-reveal/Pulse';

export default class Experiences extends React.Component {
    constructor(props) {
        super(props);
        this.quote = props.quote;
        this.author = props.author;
    }

    render() {
        return (
            <div className='div-quote'>
                <div className='div-quote-in'>
                    <Pulse>
                        <p className='p-quote'>
                            {this.quote}
                        </p>
                        <p className='p-quote-ref'>
                            {this.author}
                        </p>
                    </Pulse>
                </div>
            </div>
        );
    }
}
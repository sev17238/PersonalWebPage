/*
    ./client/components/Footer.jsx
*/
import React from 'react';
import './Footer.css';
import Pulse from 'react-reveal/Pulse';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id='contact' className='footer'>
                <div className='innerDivFooter'>
                    <h4 className='contact-title'>Contact</h4>
                    <div className='div1-footer'>
                        <div className='footer-content'>
                        <div className='div-quote-ft'>
                                <div className='div-quote-in-ft'>
                                    <Pulse>
                                        <p className='p-quote-ft'>
                                            "Just smile! Things are better that way!"
                                        </p>
                                        <p className='p-quote-ref'>
                                            - Diego Sevilla, 2020
                                        </p>
                                    </Pulse>
                                </div>
                            </div>
                            <p className='get-in-touch'>Get in touch with me!</p>
                            <ul className='footer-links'>
                                <li className='footer-links-in'>
                                    <span>
                                        <a href="https://www.linkedin.com/in/diego-sevilla-11242618a/">
                                            <i className="fab fa-linkedin" style={{color: "whitesmoke", fontSize: "48px", opacity: "0.8"}}></i>
                                        </a>
                                    </span> 
                                </li>
                                <li className='footer-links-in'>
                                    <span className='inline-span'>
                                        <a className='email' href="">
                                            <i className="fas fa-at" style={{color: "whitesmoke", fontSize: "48px", opacity: "0.8"}}></i>
                                            sevilla.diego8@gmail.com  
                                        </a>   
                                    </span> 
                                </li>
                            </ul>
                        </div>   
                        <div className='div-line-footer'></div>
                    </div>
                </div>
            </footer>
        );
    }
}

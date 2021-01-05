/*
    ./src/components/Container.jsx
*/
import React from 'react';
import '../css/global.css';
import { Parallax} from 'react-parallax';
import Header from '../components/Header/Header';
import AboutMe from '../components/main/AboutMe';
import Quote from '../components/main/Quote';
import Experiences from '../components/main/Experiences';
import Abilities from '../components/Abilities/Abilities';
import Projects from '../components/main/Projects';
import Footer from '../components/Footer';
//import ReactRevealText from 'react-reveal-text/lib/ReactRevealText';
import Zoom from 'react-reveal/Zoom';
//import classnames from 'classnames';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
        /*this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };*/
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ show: true });
        }, 200);
    }
    
    handleScroll(){
        let header = document.getElementById('headercontent'); 
        //let headernav = document.getElementById('headernav');
        let windowsScrollTop = window.pageYOffset;
        if(windowsScrollTop <= 350){
            header.classList.remove('bgColor');
            //headernav.classList.remove('is-not-active');

            //this.setState({isTop:false});
        }else{           
            header.classList.add('bgColor');
            //headernav.classList.add('is-not-active');
            //this.setState({isTop:true});
        }
    }

    render() { /*<h2>Scroll {this.state.isTop ? 'down' : 'up'}!</h2> */
        window.addEventListener('scroll', this.handleScroll);
        return (
            <div>
                <Header/>
                <Parallax
                    blur={0}
                    bgImage={require('../images/skyme.JPG')}
                    bgImageAlt="Skyme"
                    strength={200}
                >
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
                <main>
                    <AboutMe/>
                    <Quote quote='"Talent is just a myth, you only need practice."' author='- Diego Sevilla, 2020'/>
                    <Experiences/>
                    <Abilities/>
                    <Projects/>
                    <Parallax
                        blur={0}
                        bgImage={require('../images/piano-guitar_purple.jpg')}
                        bgImageAlt="Hobbies"
                        strength={300}
                    >
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
                            strength={100}
                        
                        >
                            <div style={{height: '20em'}}></div>

                        </Parallax>
                    </Parallax>
                </main>
                <Footer/>
            </div>
        );
    }
}
/*<div id="pagetop" className='container'>
                <Header/>
                <Main/>


            </div> 
            
<Header className={classnames('header', {
                    'Hide': !this.state.visible
                })}/>
            */

            /* <ReactRevealText text="Great View!" className='NameIntro' show={this.state.show}/>     
                            <ReactRevealText text="Isn't it?" className='Name' show={this.state.show}/>     */
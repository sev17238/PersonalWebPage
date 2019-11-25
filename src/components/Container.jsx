/*
    ./src/components/Container.jsx
*/
import React from 'react';
import '../css/global';
import { Parallax, Background } from 'react-parallax';
import Header from './header/Header';
import AboutMe from './main/AboutMe';
import Quote from './main/Quote';
import Experiences from './main/Experiences';
import Abilities from './main/Abilities';
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
    /*
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(){
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };*/

   
    
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
                    bgImageAlt="Skeme"
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
                    <Quote/>
                    <Experiences/>
                    <Abilities/>
                </main>
                

                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={require('../images/skyme.JPG')}
                    bgImageAlt="the dog"
                    strength={-200}
                >
                    Blur transition from min to max
                    <div style={{ height: '200px' }} />
                </Parallax>
                <Parallax strength={300}>
                    <div>Use the background component for custom elements</div>
                    <Background className="custom-bg">
                        <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
                    </Background>
                </Parallax>
                <Parallax
                    bgImage={'../images/skyme.JPG'}
                    strength={400}
                    renderLayer={percentage => (
                        <div
                            style={{
                                position: 'absolute',
                                background: `rgba(255, 125, 0, ${percentage * 1})`,
                                left: '50%',
                                top: '50%',
                                width: percentage * 500,
                                height: percentage * 5000,
                            }}
                        />
                    )}
                >
                    <p>... Content</p>
                </Parallax>
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
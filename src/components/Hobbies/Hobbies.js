import React from 'react';
import './Hobbies.css';
import { Parallax} from 'react-parallax';
import Zoom from 'react-reveal/Zoom';

const hobbies = (props) =>{
    return(
        <Parallax
            blur={0}
            bgImage={require('../../images/piano-guitar_purple.jpg')}
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
                bgImage={require('../../images/crowd2.png')}
                bgImageAlt="crowd"
                strength={100}>
                <div style={{height: '20em'}}></div>
            </Parallax>
        </Parallax>
    )
}

export default hobbies;
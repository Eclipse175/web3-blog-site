import React from 'react';
import App from '../App.js';
import './Header.css';
import DesktopHeader from '../images/image-web-3-desktop.jpg';

const Header = () => {
    return (
        <div className='parent'>
            <div className='header'>

                <div className='image-wrapper'>
                    <img className='hero-img' alt='header' src={DesktopHeader} />
                </div>

                <div className='main-content'>

                    <h1 className='new-title'>New</h1>

                    <h3>Hydrogen vs Electric cars</h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <div className='line-break'></div>

                    <h3>The Downsides of AI Artistry</h3>
                    <p>What are the possible adverse effect of on-demand AI image generation?</p>
                    <div className='line-break'></div>

                    <h3>Is VC Funding Drying Up?</h3>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    <div className='line-break'> </div>
                </div>

                <div className='title'>
                    <h1>The Bright Future of Web 3.0?</h1>
                </div>

                <div className='details'>
                    <p>We dive into the next evolution of the web
                        that claims to put the power of the platforms back into
                        the hands of the people. But is it really fulfilling
                        its promise?</p>
                    <button class='CTA'>READ MORE</button>
                </div>

            </div>
        </div>
    )
}
export default Header;
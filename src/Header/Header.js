import React from 'react';
import App from '../App.js';
import './Header.css';
import DesktopHeader from '../images/image-web-3-desktop.jpg';

const Header = () => {
    return (
        <header className='header'>
            <div className='image-wrapper'>
                <img className='hero-img' alt='header' src={DesktopHeader} />
            </div>
            <div className='main-content'>

                <h1 className = 'new-title'>New</h1>

                <h3>Hydrogen vs Electric cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                <div className='line-break'></div>

                <h3>The Downsides of AI Artistry</h3>
                <p>What are the possible adverse effect of on-demand AI image generation?</p>
                <div className='line-break'></div>

                <h3>Is VC Funding Drying Up?</h3>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                <div className='line-break'></div>

            </div>
        </header>
    )
}
export default Header;
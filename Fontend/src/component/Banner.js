import { useEffect } from 'react';
import Typed from 'typed.js';

const Banner = () => {

    useEffect(() => {
        const options = {
            strings: ['<span>answers...</span>',
                '<span style="color: #2f67fd !important">support...</span>',
                '<span style="color: #2f67fd !important">help...</span>',
                '<span style="color: #F05340 !important">provide...</span>'],
            typeSpeed: 80,
            loop: true,
            backDelay: 900,
            backSpeed: 50
        };
        const typed = new Typed('.typing-element', options);
        return () => {
            typed.destroy();
        };
    }, []);

    return (

        <>
            <section className='section'>
                <div className="introduce">
                    <div className='hello'>Welcome to</div>

                    <div className='introduce-text'>
                        <span className="text-slider-items">
                            <span>Happy Programming, we are here to <span className="typing-element"></span></span>
                        </span>
                    </div>
                    <p className='describe'>
                        <h5>Learn a new skill, launch a project, land your dream career.</h5>
                    </p>
                </div>

                <div className="avatarWrap">
                    <div className='moon'>
                        <div className="avtart">
                            <img src='https://happycode.com.es/wp-content/uploads/2022/01/HAPPY_CODE_LOGO-DUDA-gde_rgb-e1642522206836.png' />
                        </div>
                        <div className='orbit'>
                            <p>✈️</p>
                            <div className='luxurious'>⭐️</div>
                            <div className='rob'>⭐️</div>
                        </div>
                    </div>
                </div>
            </section>
        </ >
    );
}

export default Banner;


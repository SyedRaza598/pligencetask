import React from 'react';
import bgVideo from '../images/bg_video_dark.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    

const HeroSection = (props) => {
    return (
        <React.Fragment>
            <div className="heroSection">
                <div className="video">
                    <video autoPlay muted loop width="100%" height="100%">
                        <source src={bgVideo} />
                    </video>
                </div>
                <div className="container heroSection--content">
                    <p>Intelligent and Automated Cyber Security and Privacy Solution Provider</p>
                    <h1>Ensuring Your <span>Privacy</span></h1>
                    <a href="">
                        Get in touch
                    </a>
                    <div className="heroSection--content__socialIcons">
                        <ul>
                            <li><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></li>
                            <li><FontAwesomeIcon icon={['fab', 'twitter']} /></li>
                            <li><FontAwesomeIcon icon={['fab', 'facebook-f']} /></li>
                            <li><FontAwesomeIcon icon={['fab', 'instagram']} /></li>
                            <li><FontAwesomeIcon icon={['fab', 'youtube']} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HeroSection;
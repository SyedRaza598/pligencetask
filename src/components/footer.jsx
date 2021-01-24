import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/pligencelogo.png'

const Footer = (props) => {
    return (
        <div className="footer--wrapper">
            <div className="footer container">
                <div className="footer--brand">
                    <div className="footer--brand--logo">
                        <a href=""><img src={logo} alt=""/></a>
                    </div>
                    <p>
                        Copyright © 2020. All rights reserved.
                    </p>
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
                <div className="footer--quickLinks">
                    <p>quick links</p>
                    <ul>
                        <li>home</li>
                        <li>careers</li>
                        <li>blog</li>
                        <li>contact us</li>
                    </ul>
                </div>
                <div className="footer--ourProducts">
                    <p>Our Products</p>
                    <ul>
                        <li>Privacy defender application</li>
                        <li>threat intelegence platform</li>
                        <li>threat protection system</li>
                    </ul>
                </div>
                <div className="footer--ourServices">
                    <p>Our services</p>
                    <ul>
                        <li>Mobile application threat protection services</li>
                        <li>cyber security assesment services</li>
                        <li>security device management</li>
                    </ul>
                </div>
                <div className="footer--empty">
                    <p>empty</p>
                    <ul>
                        <li>security incident & threat management</li>
                        <li>security incident response service</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Footer;
import React from 'react';
import Cards from './cards';
import SIM from '../images/SIM3.png'
import CSMA from '../images/CSMA2.png'
import CSOC from '../images/CSOC2.png'
import AMA from '../images/AMA1.png'

const Services = (props) => {
    const servicesContent = [
        {
            type: "Mobile Application Security Assessment",
            description: "Identifies security flaws and vulnerabilities present within the mobile application and provides a comprehensive plan to improve the application’s security posture.",
            image: SIM
        },
        {
            type: "Security Device Management",
            description: "Identifies security flaws and vulnerabilities present within the mobile application and provides a comprehensive plan to improve the application’s security posture.",
            image: CSMA
        },
        {
            type: "Security Incident and Threat Management",
            description: "Identifies security flaws and vulnerabilities present within the mobile application and provides a comprehensive plan to improve the application’s security posture.",
            image: CSOC
        },
        {
            type: "Cyber Security Assessment",
            description: "Identifies security flaws and vulnerabilities present within the mobile application and provides a comprehensive plan to improve the application’s security posture.",
            image: AMA
        }
    ]
    return (
        <React.Fragment>
            <div className="services container">
                <h1>SERVICES WE PROVIDE</h1>
                <Cards content={servicesContent} width="180px"/>
            </div>
        </React.Fragment>
    );
}

export default Services;
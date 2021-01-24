import React from 'react';
import {useState , useEffect} from 'react'
import CareerTypes from './careerTypes';

const Careers = (props) => {
    const [career , setCareer] = useState([])
    useEffect(() => {
        setCareer([
            {
                careerName: 'Cyber Security Researchers'
            },
            {
                careerName: 'Front-End Developers'
            },
            {
                careerName: 'Back-End Developers'
            },
            {
                careerName: 'SOC Resources'
            },
            {
                careerName: 'Marketing and Communication'
            },
            {
                careerName: 'Sales Management'
            },
            
        ])
    },[])
    return (
        <React.Fragment>
            <div className="careers products container">
                <h1>CAREERS</h1>
                <p>Now could be the ideal time to choose a career in cyber security. With the significant increase in digital and mobile technologies, hackers and malicious individuals have more opportunities than ever before to steal information and disrupt networks</p>
                <div className="careers--card">
                    <CareerTypes career={career}/>
                </div>
                <div className="explore">
                    <a href="">
                        Explore more
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(Careers);
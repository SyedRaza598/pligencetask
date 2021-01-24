import React from 'react';
import Cards from './cards'
import security from '../images/111.png'
import attack from '../images/222.png'
import ransom from '../images/333.png'

const Blog = (props) => {
    const blogsContent = [
        {
            type: "How to Increase Your Security Posture with Fewer Resources",
            description: "With the quantity of COVID-19 cases expanding, another round of assaults is approaching over schools…",
            image: security
        },
        {
            type: "6 Questions Attackers Ask Before Exploit",
            description: "In the previous decade or thereabouts, we've seen a gigantic move toward the cloud. The…",
            image: attack
        },
        {
            type: "What’s Next for Ransomware in 2021?",
            description: "Ransomware works. That is the most straightforward approach to clarify why episodes of ransomware assaults…",
            image: ransom
        },
    ]
    return (
        <React.Fragment>
            <div className="products container">
                <h1>BLOGS</h1>
                <p>Now could be the ideal time to choose a career in cyber security. With the significant increase in digital and mobile technologies, hackers and malicious individuals have more opportunities than ever before to steal information and disrupt networks</p>
                <div className="products--cards">
                <Cards content={blogsContent} width="300px"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(Blog);
import React from 'react';
import Cards from './cards'
//import AMA from '../images/PPA3.png'
import PPA from '../images/PPA3.png'
import TIP from '../images/TIP3.png'
import TPS from '../images/TPS3.png'

const ProductsSection = (props) => {
    const productsContent = [
        {
            type: "Privacy Defender Application",
            description: "Privacy Assurance, Threat Detection, and Intelligent Real-Time protection Application suite for Mobile users.",
            image: PPA
        },
        {
            type: "Threat Intelligence Platform",
            description: "Machine Intelligence based automated Threat collection, Transformation, Correlation, and Analytic system to identify, assess and monitor suspected threats and sources.",
            image: TIP
        },
        {
            type: "Threat Protection System",
            description: "Security Threat and Vulnerability Identification, Real-Time Threat Prevention, Security Incident Management, and security Device and Application Orchestration system",
            image: PPA
        }
    ]
    return (
        <React.Fragment>
            <div className="products container">
                <h1>PRODUCTS</h1>
                <p>The world relies on technology more than ever before. Our products are designed to ensure privacy and security of our user’s digital data.</p>
                <div className="products--cards">
                <Cards content={productsContent} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductsSection;
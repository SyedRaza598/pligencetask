import React from 'react';

const CareerTypes = ({career}) => {
    return (
        <React.Fragment>
            {career.map((c , i) => (
                <div className="careers--card__type">
                    <a href="">
                        {c.careerName}
                    </a>         
                </div>
            ))}
        </React.Fragment>
    );
}

export default CareerTypes;
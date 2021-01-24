import React from 'react';

const Cards = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            {props.content.map((a , i) =>(
                <div className="productCard">
                <img style={{width: props.width}} src={a.image} alt=""/>
                <p>{a.type}</p>
                <p>{a.description}</p>
                <a className="productCard--learnMore">
                    <span>learn more</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white"/>
                    </svg>
                </a>
            </div>
            ))}
        </React.Fragment>
    );
}

export default React.memo(Cards);
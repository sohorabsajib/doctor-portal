import React from 'react';

const Card = ({card}) => {
    const {name, description,icon, bgClass} =card;
    return (
        <div className={`card px-6 card-side  shadow-xl  ${bgClass} `}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default Card;
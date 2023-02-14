import React from 'react';

const Infocard = ({card}) => {
    const {name,description,icon,bgcolor}=card;
    return (
        <div className={`card   shadow-xl ${bgcolor} md:card-side text-white p-5`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default Infocard;
import React from 'react';

const review = ({ review }) => {
    const { name, pic, reviews: userReview, location } = review;
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                
                <p>{userReview}</p>
                <div className="flex items-center mt-6 ">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={pic} alt='' />
                        </div>
                        
                    </div>
                    <div>
                            <h5>{name}</h5>
                            <p>{location}</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default review;
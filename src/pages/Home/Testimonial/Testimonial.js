import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people from '../../../assets/images/people1.png';


import Review from './Review';
const Testimonial = () => {
    const reviews =[
        {
            _id:1,
            name: 'Winson Herry',
            location: 'California',
            reviews:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            pic: people

        },
        {
            _id:2,
            name: 'Winson Herry',
            location: 'California',
            reviews:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            pic: people

        },
        {
            _id:3,
            name: 'Winson Herry',
            location: 'California',
            reviews:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            pic: people

        },
    ]
    return (
        <section className='mt-24'>
            <div className='flex justify-between'>
                <div className=''>
                <h4 className='text-lg text-primary font-bold '>Testimonial</h4>
                 <h1 className="text-4xl font-bold ">What Our Patients Says</h1>
                </div>
                <figure className='w-24 lg:w-48'>
                    <img src={quote} alt=''></img>
                </figure>
            </div >
                
                
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                    reviews.map(review=><Review
                        key={review._id}
                        review={review}
                    
                    ></Review> )
}
            </div>
        </section>
    );
};

export default Testimonial;
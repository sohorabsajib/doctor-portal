import React from 'react';
import fluride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            descriptions: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            descriptions: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            descriptions: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        }
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Service We Porovide</h2>
            </div>
            <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
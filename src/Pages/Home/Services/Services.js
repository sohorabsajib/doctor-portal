import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const servicedata = [
        {id:1, name: 'Fluoride Treatment', icon:fluoride,  description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'},
        {id:2, name: 'Cavity Filling', icon:cavity,  description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'},
        {id:3, name: 'Teeth Whitening', icon:whitening,  description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'},
    ]
    return (
        <div className="mt-16">
            <div className='text-center'>
               <h3 className='text-xl font-bold text-primary uppercase'> Our Services</h3>
               <h2 className='text-3xl'>Services We Provide</h2>

            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {
                servicedata.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
        </div>
        
    );
};

export default Services;
import React from 'react';
import Card from './Card';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg'

const Infocards = () => {
    const cardData = [
        {id:1,name: 'Opening Houres', description: 'Open 9:00 am to 5.00 pm everydayt', icon: clock, bgClass:'bg-gradient-to-r from-primary to-secondary'},
        {id:2,name: 'Visit our location', description: 'Brooklyn, NY 10036, United States', icon: marker, bgClass:'bg-accent'},
        {id:3,name: 'Contact us now', description: '+000 123 456789', icon: phone, bgClass:'bg-gradient-to-r from-primary to-secondary'},
    ]
    return (
        <div className='grid mt-8 text-white md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                cardData.map(card => <Card
                key={card.id}
                card={card}
                ></Card>)
            }
        </div>
    );
};

export default Infocards;
import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Contact from '../Contact/Contact';
import DoctorAppointmet from '../DoctorAppointment/DoctorAppointmet';
import Infocards from '../Infocards/Infocards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
            <Care></Care>
            <DoctorAppointmet></DoctorAppointmet>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;
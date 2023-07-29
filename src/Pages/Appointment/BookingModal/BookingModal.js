import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.config';

const BookingModal = ({ treatment,setTreatment, selected }) => {
    const { name,slots } = treatment;
    const [user,loading,error]=useAuthState(auth);
    const date = format(selected, 'PP');

    const handleBooking = event  => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const booking={
            appointmentDate : date,
            treatment:name,
            Patient: name,
            slot:slot,
            email,
            phone,
            
        }
        console.log(booking);
        setTreatment(null);

        
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name="slot" className="select select-bordered w-full ">
                            
                            {
                                slots.map((slot,i) => <option
                                    key={i} 
                                    value={slot} 
                                    >{slot}</option>)
                            }
                            
                        </select>
                        <input name="name" type="text" disabled value={user?.displayName || ""} className="input input-bordered w-full " />
                        <input name="email" type="text" disabled value={user?.email || ""} className="input input-bordered w-full " />
                        <input name="phone" type="text" placeholder="PHone Number" className="input input-bordered w-full " />
                        <br></br>
                        <input className="btn btn-accent w-full " type='submit' value='Submit'></input>

                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;
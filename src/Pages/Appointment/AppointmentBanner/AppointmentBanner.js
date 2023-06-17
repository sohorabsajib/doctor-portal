
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selected, setSelected }) => {

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm lg:w-1/2 rounded  shadow-2xl" alt='' />
                <div className='px-5'>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}

                    ></DayPicker>
                    {/* <p>You picked {format(selected, 'PP')}.</p> */}
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
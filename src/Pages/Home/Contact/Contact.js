import React from 'react';
import bg from '../../../assets/images/appointment.png'
const Contact = () => {
    return (
        <section className='mt-32'
        style={{
            background: `url(${bg})`
        }}>
        <div className='flex items-center justify-center m-20'>
            <form className='m-20'>
                  
                  <div class="mb-6">
                     <input
                        type="email"
                        placeholder="Your Email"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  <div class="mb-6 w-80">
                     <input
                        type="text"
                        placeholder="Subject"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  
                  <div class="mb-6">
                     <textarea
                        rows="3"
                        placeholder="Your Message"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        ></textarea>
                  </div>
                  <div className='text-center'>
                     <button
                        type="submit"
                        class="
                        w-24 
                        text-white
                        bg-primary
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                        >
                     Submit
                     </button>
                  </div>
               </form>
        </div>
        </section>
    );
};

export default Contact;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const ContactUs: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100" id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden md:flex">
          <div className="md:w-1/3 bg-blue-500 p-6 text-white">
            <h2 className="text-2xl font-semibold">Let's get in touch</h2>
            <p className="mt-4">We're open for any suggestion or just to have a chat</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-3" />
                <span>Jidka Warshadaha, Banaadir</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-3" />
                <span>+252613174074</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-3" />
                <span>ahmedbicir2@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faGlobe} className="h-5 w-5 mr-3" />
                <span>beerta xamar</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-semibold text-[#01b657]">Get in touch</h2>
            <form className="mt-6 space-y-4">
              <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
                <div className='w-full md:w-1/2'>
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full magc</label>
                  <input type="text" id="full-name" className="w-full p-2 border border-blue-600 rounded mt-1 bg-transparent text-black " placeholder="Name" />

                </div>
                <div className=' w-full md:w-1/2'>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="email" id="email-address"  className="w-full p-2 border border-blue-600 rounded mt-1 bg-transparent text-black " placeholder="Email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" className="w-full p-2 border border-blue-600 rounded mt-1 bg-transparent text-black " placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" className="w-full p-2 border border-blue-600 rounded mt-1 bg-transparent text-black " rows={4} placeholder="Message"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#01b657] hover:bg-[#303085] ">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

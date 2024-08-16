'use client'

import React, { useState } from 'react';
import Office from '../../../../public/images/office.png'
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
    // Here you can add your form submission logic, like sending data to a backend.
  };

  return (
    <section className="flex justify-center py-16 mt-20">
      <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-[45%]">
          <Image src={Office} alt="Office" className="w-full h-full object-cover" width={200} height={200}/>
        </div>
        <div className="md:w-[50%] py-8">
          <h2 className="text-3xl font-semibold mb-6">How can we help?</h2>
          <p className="text-gray-600 mb-6">If you need support, you've come to the right place.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className='flex flex-col md:w-1/2 '>
                <p>First name</p>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="pl-2 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              </div>
             <div className='flex flex-col md:w-1/2 mt-4 md:mt-0'>
                <p>Last name</p>
             <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className=" pl-2 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
             </div>
            </div>
            <div className='w-full'>
                <p>Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            </div>
           <div className='w-full'>
            <p>Phone number</p>
           <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="US +1 (555) 000-0000"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
           </div>
            <div className='w-full'>
                <p>Message</p>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave us a message..."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <label className="text-gray-600">
                You agree to our friendly{' '}
                <a href="#" className="text-indigo-600 underline">
                  privacy policy
                </a>.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

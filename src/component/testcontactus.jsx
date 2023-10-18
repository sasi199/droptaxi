import React from 'react';
import carsImage from '../assets/car cc.jpg';

const TestContactUs = () => {
  return (
    <div id='contact' className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-16 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={carsImage}
              alt="Contact Us Background"
              className="rounded-lg shadow-lg h-auto w-full md:h-[420px] md:w-[700px]"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-800 font-semibold mb-2">Your Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-primary hover:border-black rounded-lg focus:outline-none focus:border-black" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-gray-800 font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:border-black" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="text-gray-800 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none focus:border-black"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-primary text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white focus:outline-none">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestContactUs;

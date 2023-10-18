import React from "react";
import car1 from "../assets/taxi7.png";
import car2 from "../assets/taxi8.png";
import car3 from "../assets/taxi9.jpg";

const ServicePage = () => {
  return (
    <div id="services" className="h-fit">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center  mt-10 px-4 lg:px-0">
          <h3 className="text-4xl font-semibold text-center">
            <span className="text-primary">DROP TAXI</span><span className="text-gray-700"> SERVICES</span>
          </h3>
          <hr className="border-t-2 border-primary my-2 w-14" />

          <p className=" text-lg mt-2 text-center  max-w-2xl font-medium">
            Discover a spectrum of premium services at Janani Drop-Taxi,
            designed to redefine your travel experience. Our fleet of
            well-maintained vehicles, punctual pickups, and experienced drivers
            ensure reliability. 
          </p>
        </div>
        <div className="lg:grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 sm: ">
          <div className="bg-white p-8 rounded-lg drop-shadow-lg hover:drop-shadow-xl transform hover:scale-105 transition duration-300 flex items-center">
            <img
              src={car1} // Replace with the actual URL of the luxury car image
              alt="Luxury Car"
              className="rounded-lg w-32 h-32 mr-6"
            />
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Luxury Car Pick-Up
              </h2>
              <p className="text-gray-800 leading-7">
                We arrange cheap and accessible local taxi hiring facilities for
                travelers who want to rent a car for in-city usage. This
                includes local sightseeing, in-city transfers, pick and up drop
                services, short-time booking, and more.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg drop-shadow-lg hover:drop-shadow-xl transform hover:scale-105 transition duration-300 flex items-center">
            <img
              src={car2} // Replace with the actual URL of the car hire image
              alt="Car Hiring Options"
              className="rounded-lg w-32 h-32 mr-6"
            />
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Car Hiring Options
              </h2>
              <p className="text-gray-800 leading-7">
                We provide both half-day and full-day car hiring facilities to
                our customers, allowing them to choose as per their convenience
                and needs. Whether you need it for local travel or long-distance
                journeys, we've got you covered.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg drop-shadow-lg hover:drop-shadow-xl transform hover:scale-105 transition duration-300 mt-8 flex items-center">
          <img
            src={car3} // Replace with the actual URL of the city transfer image
            alt="City Transfers"
            className="rounded-lg w-32 h-32 mr-6"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">City Transfers</h2>
            <p className="text-gray-800 leading-7">
              Planning for weekend getaways or family leisure trips outside the
              city? We arrange safe and timely transfers to any city you want to
              travel, ensuring you reach your destination comfortably.
            </p>
          </div>
        </div>
        {/* <div className='flex justify-center'>
        <div className="bg-white p-8 w-[800px] rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 mt-8 flex justify-center">
          <div className="w-32 h-32 flex items-center justify-center bg-green-500 text-white rounded-full mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l-4 1m8-5l-4 10M12 8l4 10"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 leading-7">
              <li>Best Price in the Market.</li>
              <li>Luxury and Comfortable Vehicles.</li>
              <li>Well Experienced Driving Service.</li>
              <li>Cover the Entire South India at Best Cost.</li>
              <li>Available in Multiple Days Packages.</li>
            </ul>
          </div>
        </div>
  </div> */}
      </div>
    </div>
  );
};

export default ServicePage;

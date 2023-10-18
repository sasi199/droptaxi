import React from "react";
import cars from "../assets/0.png"; // Make sure the path is correct
import "@fortawesome/fontawesome-free/css/all.css";

const About = () => {
  return (
    <div id="about" className="w-full h-fit mt-8">
      <div className="flex flex-col items-center justify-center  lg:px-0">
        <h3 className="text-4xl font-semibold text-center text-gray-700">
          ABOUT OUR <span className="text-primary">DROP TAXI</span>
        </h3>
        <hr className="border-t-2 border-primary my-2 w-14" />

        <div className="flex flex-wrap justify-around mt-4">
          {/* Card 1 */}
          <div className="w-full sm:w-full md:w-full lg:w-1/4 p-4">
            <div className="bg-gray-100 px-20 py-4 h-40 rounded-lg drop-shadow-md flex flex-col items-center justify-center">
              {/* Icon */}
              <i className="far fa-clock text-4xl text-primary"></i>
              <p className="text-sm text-black text-center font-semibold mt-4">
                Punctuality
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full sm:w-full md:w-full lg:w-1/4 p-4">
            <div className="bg-gray-100 px-20 py-4 h-40 rounded-lg drop-shadow-md flex flex-col items-center justify-center">
              {/* Icon */}
              <i className="fas fa-user-tie text-4xl text-primary"></i>
              {/* Text */}
              <p className="text-sm text-black font-semibold  mt-4">
                Experienced Drivers
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full sm:w-full md:w-full lg:w-1/4 p-4">
            <div className="bg-gray-100 px-20 py-4 h-40 rounded-lg drop-shadow-md flex flex-col items-center justify-center">
              {/* Icon */}
              <i className="fas fa-car text-4xl text-primary"></i>
              {/* Text */}
              <p className="text-sm text-black font-semibold text-center mt-4">
                well-maintained fleet
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full sm:w-full md:w-full lg:w-1/4 p-4">
            <div className="bg-gray-100 px-20 py-4 h-40 rounded-lg drop-shadow-md flex flex-col items-center justify-center">
              {/* Icon */}
              <i className="fas fa-star text-4xl text-primary"></i>
              {/* Text */}
              <p className="text-sm text-black font-semibold text-center mt-4">
                Affordable Price
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-0 flex-col lg:flex-row">
          <div className="w-full lg:w-3/2 ml-7">
            <div className="p-4">
              <p className="mt-2 text-base ml-6 font-medium max-w-4xl  ">
                JANANI ONE WAY CALL TAXI RIDE is dedicated to revolutionizing
                your travel experience into an unparalleled, convenient, and
                cost-effective journey. Our emphasis on one-way taxi services
                underscores our commitment to affordability, reliability, and
                comfort, ensuring a seamless and stress-free trip. Opt for
                JANANI for a ride that not only prioritizes your journey but
                also promises an optimal mix of comfort and affordability,
                delivering the peace of mind you deserve throughout your
                travels. Experience the difference with JANANI ONE WAY CALL TAXI
                RIDE today.Embark on a journey with JANANI, where each ride
                reflects our commitment to quality, ensuring not just travel,
                but unforgettable adventures. Explore the JANANI difference now{" "}
              </p>
              <ul className="mt-4 text-base font-medium ml-6 text-black max-w-3xl  ">
                <li>&#x2713; Best Price in Market.</li>
                <li>&#x2713; Luxury and Comfortable Vehicles.</li>
                <li>&#x2713; Well Experienced Driving Service.</li>
                <li>&#x2713; Cover the Entire South India at Best Cost.</li>
                <li>&#x2713; Available in Multiple Days Packages.</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img
              src={cars} // Replace with your car-related image URL
              alt="Car"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

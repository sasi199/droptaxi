import React from "react";
import logo from "../assets/only logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-primary py-3">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-start-1 md:col-end-2 mx-10">
          <img src={logo} alt="Logo" />
          <p className="text-primary">
            Janani One Way Drop Taxi offers reliable transportation solutions
            with a focus on safety, comfort, and punctuality.
          </p>
        </div>
        <div className="md:col-start-2 md:col-end-3 mx-10 mt-5">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-primary">
            <li className="mb-2">
              <a href="#home">Home</a>
            </li>
            <li className="mb-2">
              <a href="#about">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#services">Services</a>
            </li>
            <li className="mb-2">
              <a href="#blogs">Blogs</a>
            </li>
            <li className="mb-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="md:col-start-3 md:col-end-4 mx-10 mt-5">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-primary">
            123 Taxi Avenue, City Name
            <br />
            Email: info@yourtaxi.com
            <br />
            Phone: +123 456 7890
          </p>
        </div>
        <div className="md:col-start-4 md:col-end-5 mx-10 mt-5">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-primary hover:text-white">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-primary hover:text-white">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-primary hover:text-white">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary mt-6 pt-2 text-start">
  <p className="text-sm text-black-400 flex flex-col-reverse md:flex-row justify-between items-center">
    <span className="mb-2 md:mb-0">
      © {new Date().getFullYear()} Your Taxi. All rights reserved
    </span>
    <span className="md:ml-auto">
      Design and Development by{" "}
      <a
        href="https://whyglobalservices.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        whyglobalservices
      </a>
      .
    </span>
  </p>
</div>

    </footer>
  );
};

export default Footer;

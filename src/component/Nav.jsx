import React, { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../assets/logos.jpg";
import "./Nav.css";

const Nav = () => {
  const Links = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Blogs", link: "#blogs" },
    { name: "Contact", link: "#contact" },
  ];

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const smoothScrollTo = (target) => {
    const element = document.querySelector(target);
    if (element) {
      const navHeight = document.querySelector(".Nav").offsetHeight;
      const containerPadding = 20; // Adjust this value to match the padding of your container
      const contentOffset = 20; // Adjust this value to match the offset of the content within the container

      // Calculate the scroll position
      const top =
        element.offsetTop - navHeight - containerPadding + contentOffset;

      window.scrollTo({
        behavior: "smooth",
        top: top,
      });
    }
  };

  useEffect(() => {
    // Apply waving animation to the "Book Now" button
    document.getElementById("bookNowButton").classList.add("waving-animation");
  }, []);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  const handleLinkClick = (link) => {
    const target = document.querySelector(link.link);
    if (target) {
      const navHeight = document.querySelector(".Nav").offsetHeight;
      const containerPadding = 20;
      const contentOffset = 20;

      const top = target.offsetTop - navHeight - containerPadding + contentOffset;

      window.scrollTo({
        behavior: "smooth",
        top: top,
      });

      if (open) {
        setOpen(false);
      }
    }
  };


  const handleBookNowClick = () => {
    const target = document.querySelector("#home"); // Replace with the appropriate target ID
    if (target) {
      const navHeight = document.querySelector(".Nav").offsetHeight;
      const containerPadding = 20;
      const contentOffset = 20;
  
      const top = target.offsetTop - navHeight - containerPadding + contentOffset;
  
      window.scrollTo({
        behavior: "smooth",
        top: top,
      });
  
      if (open) {
        setOpen(false);
      }
    }
  };
  
  
  
  return (
    <div className="Nav md:flex items-center justify-between bg-white py-4 md:px-10 px-7 sticky top-0 z-30">
      <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
        <img src={logo} className="w-24 h-20" alt="Logo" />
      </div>

      <div
        onClick={handleMenuToggle}
        className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-black sm:w-5 sm:h-5"
      >
        {open ? (
          <XMarkIcon className="w-full h-full" />
        ) : (
          <Bars3BottomRightIcon className="w-full h-full" />
        )}
      </div>

      <ul className={`md:flex md:flex-row md:space-x-4 md:items-center absolute top-20 md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 space-y-4 md:space-y-0 ${open ? "md:flex-col open" : "hidden"}`}>
        {Links.map((link) => (
          <li
            key={link.name}
            className={`md:my-0 my-2 p-0 font-semibold relative transition duration-300 ${
              activeLink === link.name ? "text-primary" : "text-black"
            }`}
            onMouseEnter={() => setActiveLink(link.name)}
            onMouseLeave={() => setActiveLink(null)}
          >
            <button
              onClick={() => handleLinkClick(link)}
              className="block p-2 cursor-pointer"
            >
              {link.name}
              {activeLink === link.name && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transition-all duration-500"></span>
              )}
            </button>
          </li>
        ))}

        <li>
          <a href="#home">
          <button
  id="bookNowButton"
  className="bg-primary text-black hover:bg-black hover:text-white mt-5 font-semibold px-3 py-1 rounded shadow-lg duration-500 md:static  mobile-button"
  onClick={handleBookNowClick}
>
  Book Now
</button>
                      
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
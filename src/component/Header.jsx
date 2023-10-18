import React from 'react';
import { Phone, MailOutline, Facebook, Twitter, Instagram } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Header = () => {
  return (
    <header className="bg-primary text-white p-1 flex flex-col sm:flex-row items-center justify-between">
      {/* Left section with mobile number and email text */}
      <div className="text-center sm:text-left mb-2 sm:mb-0">
        <a href="tel:+919952111111" className="text-sm font-bold"><Phone /> +91 99521 11111</a>
        <span className='text-sm font-bold ml-4'>
          <a href="mailto:senthiltravels@gmail.com"><MailOutline /> senthiltravels@gmail.com</a>
        </span>
      </div>

      {/* Right section with social media icons */}
      <div className="text-center sm:text-right mt-2 sm:mt-0">
        <IconButton color="inherit" href="https://www.facebook.com/your-facebook-page" target="_blank" className=' hover:text-black'>
          <Facebook />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com/your-twitter-page" target="_blank" className=' hover:text-black'>
          <Twitter />
        </IconButton>
        <IconButton color="inherit" href="https://www.instagram.com/your-instagram-page" target="_blank" className=' hover:text-black'>
          <Instagram />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
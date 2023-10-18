import React, { useState, useEffect } from "react";
import car1 from "../assets/taxi4.png";
import car2 from "../assets/texi6.png";
import car3 from "../assets/taxi5.png";
import phoneIcon from "../assets/call.png";
import whatsappIcon from "../assets/what.png";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BookingForm from "./BookingForm";

const Home = () => {
  const phoneNumber = "8190081777";
  const [blinkPhone, setBlinkPhone] = useState(false);
  const [blinkWhatsapp, setBlinkWhatsapp] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=8190081777", "_blank");
  };

  useEffect(() => {
    const phoneBlinkInterval = setInterval(() => {
      setBlinkPhone((prevBlink) => !prevBlink);
    }, 500);

    return () => clearInterval(phoneBlinkInterval);
  }, []);

  useEffect(() => {
    const whatsappBlinkInterval = setInterval(() => {
      setBlinkWhatsapp((prevBlink) => !prevBlink);
    }, 500);

    return () => clearInterval(whatsappBlinkInterval);
  }, []);

  const bannerImages = [car1, car2, car3];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: false,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    onMouseEnter: () => setShowIcons(true),
    onMouseLeave: () => setShowIcons(false),
  };

  function NextArrow(props) {
    const { onClick } = props;
    return <div onClick={onClick}></div>;
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return <div onClick={onClick}></div>;
  }

  return (
    <div id="home" className="relative">
      <Slider {...settings} className="w-full">
        {bannerImages.map((image, index) => (
          <div key={index}>
            <img
              className="w-full h-screen object-cover"
              src={image}
              alt={`Banner ${index + 1}`}
            />
          </div>
        ))}
      </Slider>

     
        <div className="flex flex-col lg:flex-row items-center w-full justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
          <div className="lg:w-1/2 md:w-full sm:w-full lg:mr-4">
            <h1 className="lg:text-4xl md:text-xl sm:text-base font-bold mb-4">
              WELCOME TO {" "} 
              <span className="text-primary"> JANANI </span> ONE WAY CALL TAXI RIDE
            </h1>
            <div className="lg:text-2xl md:text-lg sm:text-xs mb-6 font-semibold text-white">
              <Typewriter
                options={{
                  strings: ["Safe", "Secure", "Comfortable", "Journey"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
                style={{ marginBottom: "20px" }}
              />
            </div>
          </div>

          <div className="lg:w-1/2 md:w-full sm:w-full lg:ml-4 ">
            <BookingForm />
          </div>
        </div>
    

      <img
        src={whatsappIcon}
        alt="WhatsApp Icon"
        className={`w-14 h-14 cursor-pointer fixed bottom-4 left-4 z-50 ${
          blinkWhatsapp ? "blink wave" : "wave"
        }`}
        onClick={openWhatsApp}
      />

      <a
        href={`tel:${phoneNumber}`}
        className={`fixed bottom-4 right-4 z-50 text-primary ${
          blinkPhone ? "blink wave" : "wave"
        }`}
      >
        <img
          src={phoneIcon}
          alt="Phone Icon"
          className="w-14 h-11 cursor-pointer rounded-full"
        />
      </a>
    </div>
  );
};

export default Home;

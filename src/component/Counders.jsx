import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faCar, faMapMarkerAlt, faAward } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import car from '../assets/counters.png';

const IconCounter = ({ icon, count, title }) => {
  return (
    <div className="flex items-center flex-col p-4 text-center">
      <FontAwesomeIcon icon={icon} className="text-4xl md:text-7xl mb-2 text-primary" />
      <p className="text-3xl md:text-6xl font-bold text-white mt-2 md:mt-4">
        <CountUp start={0} end={count} duration={1} separator="," />+
      </p>
      <p className="text-sm md:text-base text-white mt-1 md:mt-2">{title}</p>
    </div>
  );
};

const Numbers = () => {
  const happyClientsCount = 1000;
  const carsCount = 500;
  const destinationsCount = 50;
  const awardsCount = 10;

  const backgroundStyle = {
    backgroundImage: `url(${car})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="flex flex-wrap justify-center mt-4 md:mt-12 border rounded-lg shadow-neutral-700 bg-primary" style={backgroundStyle}>
      <div className="w-full md:w-1/2 flex">
        <div className="w-1/2">
          <IconCounter icon={faSmile} count={happyClientsCount} title="Happy Clients" />
        </div>
        <div className="w-1/2">
          <IconCounter icon={faCar} count={carsCount} title="Cars" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex">
        <div className="w-1/2">
          <IconCounter icon={faMapMarkerAlt} count={destinationsCount} title="Destinations" />
        </div>
        <div className="w-1/2">
          <IconCounter icon={faAward} count={awardsCount} title="Awards" />
        </div>
      </div>
    </div>
  );
};

export default Numbers;

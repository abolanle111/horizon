import React from 'react'
import Heading from '../components/Heading';
import Service from '../components/home/Service';
import Sliders from '../components/home/Slider';

const ServicePage = () => {
  return (
    <>
      <Heading heading="Services" title="Home" subtitle="Services" />
      <Service />
      <Sliders />
    </>
  );
}

export default ServicePage
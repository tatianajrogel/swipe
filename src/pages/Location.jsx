import React from 'react'
import LocationForm from "../components/location/LocationForm.jsx"
import SectionWrapper from '../components/shared/SectionWrapper.jsx'


const Location = () => {
  return (
    <SectionWrapper
      title="Search by Location"
      description="Find out if they’re using Tinder in specific areas"
    >
      <LocationForm />
    </SectionWrapper>
  );
};

export default Location
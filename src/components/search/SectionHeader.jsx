import React from "react";
import profile1 from './../../assets/images/searchImage1.png'
import profile2 from './../../assets/images/searchImage2.png'
import profile3 from './../../assets/images/searchImage3.png'
import profile4 from './../../assets/images/searchImage4.png'
import profile5 from './../../assets/images/searchImage5.png'
import profile6 from './../../assets/images/searchImage6.png'

import vector from "./../../assets/images/vector.png"

const SectionHeader = ({ title, description, children }) => {
  return (
    <div className="hidden relative w-full h-80 bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] rounded-2xl overflow-hidden md:flex  justify-center py-16 px-8">
      {/* Background pattern/vector */}
      <div className="absolute inset-0 bg-center"
        style={{backgroundImage:`url(${vector})`}} 
      ></div>
      
      {/* Small profile images */}
      <img
        className="absolute md:w-14 lg:w-16 md:h-14 lg:h-16 top-1/16 lg:top-1/10 left-1/50 rounded-full border-2 border-white/30 backdrop-blur-sm object-cover"
        src={profile1}
        alt="Profile"
      />
      <img
        className="absolute md:w-10 lg:w-12 md:h-10 lg:h-12  top-[74px]  lg:top-1/3 left-1/10 rounded-full border-2 border-white/80 backdrop-blur-sm object-cover"
        src={profile2}
        alt="Profile"
      />
      <img
        className="absolute md:w-10 lg:w-12 md:h-10 lg:h-12 top-1/12 lg:top-1/6 left-1/6 rounded-full border-2 border-white/80 backdrop-blur-sm object-cover"
        src={profile3}
        alt="Profile"
      />
      
      {/* Content */}
      <div className="text-center text-white z-10 max-w-3xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-md  opacity-90">{description}</p>

        {/* Small profile images */}
      <img
        className="absolute md:w-10 lg:w-12 md:h-10 lg:h-12 top-1/16 lg:top-1/10 right-1/50 rounded-full border-2 border-white/30 backdrop-blur-sm object-cover"
        src={profile6}
        alt="Profile"
      />
      <img
        className="absolute md:w-14 lg:w-16 md:h-14 lg:h-16 top-1/6  lg:top-[92px] right-1/10 lg:right-1/12 rounded-full border-2 border-white/80 backdrop-blur-sm object-cover"
        src={profile4}
        alt="Profile"
      />
      <img
        className="absolute md:w-10 lg:w-12 md:h-10 lg:h-12 top-1/18 lg:top-1/6 right-[150px] lg:right-[200px]  rounded-full border-2 border-white/80 backdrop-blur-sm object-cover"
        src={profile5}
        alt="Profile"
      />
      </div>
      
      {children}
    </div>
  );
};

export default SectionHeader;
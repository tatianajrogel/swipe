import { ChevronRight } from "lucide-react";
import heroImge from "../../assets/images/heroImage.png"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="lg:min-h-screen mt-16 lg:mt-12 flex items-center justify-center md:px-4 py-16 ">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="text-center px-4 md:px-0 md:text-left">
          <h1 className="text-4xl md:text-2xl lg:text-5xl  font-bold text-slate/950 mb-6">
            <span className="text-brand">Find out </span> if they are secretly on image Tinder
          </h1>

          <div className="mb-8">
            <p className="md:text-lg lg:text-2xl  text-slate-700 mb-4">
              Did you know that <span className="font-bold">42% </span>of Tinder users already have a partner?
            </p>
            <p className="lg:text-2xl  text-slate-700 mb-4">
              Discover the truth — we help hundreds find out if their partner is using dating apps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
            <Link
            to='/about'
            >
            <button className="px-8 py-4 bg-gradient-to-r from-brand to-brand-end text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg hover:shadow-xl">
              Search on Tinder <ChevronRight size={20} />
            </button>
            </Link>
          </div>

        </div>

        {/* Right Column - Image */}
        <div className="p-6  flex">
          <img src={heroImge} className=" rounded-b-full w-full h-full" alt="Woman using dating app on her phone" />
        </div>
      </div>
    </div>
  );
};



export default Hero;

import PricingCard from "./PricingCard";
import { pricingPlans } from "../../data/pricingData";

const Pricing = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-indigo-100 to-purple-50">
      <div className="max-w-6xl container mx-auto mb-6 ">
        <h2 className="text-4xl md:text-5xl font-bold  text-gray-900 mb-4">
          Choose Your <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent"> Search Package's</span>
        </h2>
        <p className="text-xl  text-gray-700 mb-8 max-w-2xl">
          Discover the perfect search package for your needs on "Dotheyswipe."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

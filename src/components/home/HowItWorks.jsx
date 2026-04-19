import Card from "./Card.jsx"
import { howItWorksSteps } from "../../data/howItWorksData";

const HowItWorks = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 text-[#333333]   bg-gradient-to-b from-indigo-100 to-purple-50 rounded-xl">
      <div className=" container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">
          How does it work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorksSteps.map((step) => (
            <Card
              key={step.id}
              icon={<step.Icon size={32} />}
              title={step.title}
              description={step.description}
              stepNumber={step.stepNumber}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

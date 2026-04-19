import FeatureCard from "./FeatureCard";
import { features } from "../../data/featuresData";

const FastAndAccurate = () => {
  return (
    <section className=" max-w-6xl mx-auto py-6 px-4 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              cardImage={feature.cardImage}
              title={feature.title}
              description={feature.description}
              imageFirst={feature.imageFirst}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastAndAccurate;

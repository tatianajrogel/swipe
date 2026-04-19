import FAQItem from "./FAQItem";
import { faqItems } from "../../data/faqData";

const FAQSection = () => {
  return (
    <section className="py-16 px-4 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-scenter  mb-16">
         <div>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently <span className="bg-[linear-gradient(to_right,#E11D48,#CC1D6B,#B81C8B,#A51CA9)] bg-clip-text text-transparent">Asked Questions.</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Answers to Common Questions About "DoTheySwipe"
          </p>
         </div>

          <div className="text-center mt-12">
          <button className="px-8 py-4 self-start  text-slate-950 border border-slate-700 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            View all FAQs
          </button>
        </div>
        </div>

        <div className="max-w-6xl mx-auto bg-white px-5 rounded-xl">
          {faqItems.map((item) => (
            <FAQItem key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;

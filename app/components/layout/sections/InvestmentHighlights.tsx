import {
  CreditCard,
  Home,
  MapPin,
} from "lucide-react";

const highlights = [
  {
    label: "01",
    value: "PRIME WATERFRONT LOCATION",
    desc: "Set within Dubai Creek Harbour, surrounded by waterfront promenades, lifestyle destinations and green spaces.",
  },
  {
    label: "02",
    value: "CONNECTED TO DUBAI",
    desc: "Enjoy convenient access to Downtown Dubai, Dubai Mall, Dubai International Airport and major business districts.",
  },
 {
    label: "03",
    value: "FLEXIBLE OWNERSHIP",
    desc: "A structured payment plan designed to provide flexibility throughout the purchasing journey.",
  },
  {
    label: "04",
    value: "LIFESTYLE-DRIVEN COMMUNITY",
    desc: "Wellness, recreation, dining and leisure come together to create a balanced modern lifestyle.",
  },
];

const InvestmentHighlights = () => {
  return (
    <section className="my-10 py-15 bg-black text-white ">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 ">
        <h2 className="text-2xl text-center mb-4 tracking-widest">WHY AURELIA</h2>
        <p className="text-center text-4xl">More than a home.
A lasting opportunity.</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => {           

            return (
              <div
                key={idx}
                className="group rounded-[24px] bg-[#F5F5DC] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mt-10 "
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-sm font-medium text-black/60">
                      {item.label}
                    </p>
                    <hr className="bg-[#333] border-[#333] mb-5" />

                    <h3 className="text-md font-semibold tracking-tight text-black md:text-lg mb-5">
                      {item.value}
                    </h3>
                    <p className="text-sm font-semibold tracking-tight text-black md:text-md">
                      {item.desc}
                    </p>
                  </div>                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestmentHighlights;
import {
  CalendarCheck,
  CreditCard,
  Home,
  MapPin,
} from "lucide-react";

const projectStats = [
  {
    label: "On Completion",
    value: "Q4 2028",
    icon: CalendarCheck,
  },
  {
    label: "Payment Plan",
    value: "Easy 20/40/40",
    icon: CreditCard,
  },
  {
    label: "Starting Price",
    value: "AED 1.25M",
    icon: Home,
  },
  {
    label: "Location",
    value: "Dubai Creek Harbour",
    icon: MapPin,
  },
];

const ProjectStats = () => {
  return (
    <section className="my-10 pt-10">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projectStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group rounded-[24px] bg-[#F5F5DC] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-sm font-medium text-black/60">
                      {stat.label}
                    </p>

                    <h3 className="text-xl font-semibold tracking-tight text-black md:text-2xl">
                      {stat.value}
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-[#D2B450]">
                    <Icon size={18} strokeWidth={1.8} />
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

export default ProjectStats;
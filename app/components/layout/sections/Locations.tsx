import Image from "next/image";
import {
  Plane,
  ShoppingBag,
  Building2,
  Landmark,
  Trees,
  Waves,
  ArrowUpRight,
} from "lucide-react";

const nearbyLocations = [
  {
    time: "15 MIN",
    name: "Downtown Dubai",
    description: "Business, dining and entertainment",
    icon: Building2,
  },
  {
    time: "18 MIN",
    name: "Dubai Mall",
    description: "Shopping and lifestyle destination",
    icon: ShoppingBag,
  },
  {
    time: "20 MIN",
    name: "Dubai International Airport",
    description: "Global travel connections",
    icon: Plane,
  },
  {
    time: "15 MIN",
    name: "Burj Khalifa",
    description: "Dubai's iconic landmark",
    icon: Landmark,
  },
  {
    time: "12 MIN",
    name: "Ras Al Khor",
    description: "Nature and wildlife sanctuary",
    icon: Trees,
  },
  {
    time: "25 MIN",
    name: "Dubai Marina",
    description: "Waterfront leisure and dining",
    icon: Waves,
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="bg-[#F5F5DC] py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B450]">
              The Location
            </p>

            <h2 className="font-serif text-4xl leading-[1.05] text-black sm:text-5xl md:text-6xl">
              Connected to the
              <br />
              <span className="italic">best of Dubai.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-base leading-7 text-black/60 md:text-lg">
              Located in Dubai Creek Harbour, Aurelia Residences places you
              within easy reach of Dubai&apos;s business, retail,
              entertainment and cultural destinations.
            </p>
          </div>
        </div>

        {/* Main Location Area */}
        <div className="grid overflow-hidden rounded-[28px] bg-black lg:grid-cols-[1.05fr_0.95fr]">

          {/* Image */}
          <div className="relative min-h-[420px] lg:min-h-[650px]">
            <Image
              src="/images/dubai-creek.webp"
              alt="Dubai Creek Harbour"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Image label */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B450]">
                Prime Waterfront Destination
              </p>

              <h3 className="font-serif text-3xl text-white md:text-4xl">
                Dubai Creek Harbour
              </h3>
            </div>
          </div>

          {/* Locations List */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">

            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                Everything within reach
              </p>

              <h3 className="mt-2 font-serif text-3xl text-white md:text-4xl">
                Key destinations
              </h3>
            </div>

            <div className="divide-y divide-white/10">
              {nearbyLocations.map((location) => {
                const Icon = location.icon;

                return (
                  <div
                    key={location.name}
                    className="group flex items-center gap-4 py-5"
                  >
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#D2B450] transition-all duration-300 group-hover:border-[#D2B450] group-hover:bg-[#D2B450] group-hover:text-black">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-xs font-semibold tracking-[0.12em] text-[#D2B450]">
                          {location.time}
                        </span>

                        <h4 className="text-base font-semibold text-white md:text-lg">
                          {location.name}
                        </h4>
                      </div>

                      <p className="mt-1 text-sm text-white/45">
                        {location.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D2B450]"
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="mb-4 text-sm leading-6 text-white/50">
                Experience the balance of peaceful waterfront surroundings
                and effortless access to the energy of Dubai.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#D2B450] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#F5F5DC]"
              >
                Enquire Now
                <ArrowUpRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
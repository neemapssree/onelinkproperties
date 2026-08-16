import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full overflow-hidden bg-black py-14 sm:py-16 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 sm:px-6 md:flex-row md:items-start md:gap-12 md:px-8">

        {/* Left Content */}
        <div className="w-full text-white md:w-1/2">

          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B450] sm:mb-5 sm:tracking-[0.25em]">
            LET&apos;S TALK
          </h2>

          <h3 className="max-w-3xl font-serif text-3xl leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl">
            Make your
            <br />
            <span className="italic text-[#D2B450]">
              next move.
            </span>
          </h3>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Share your details and our property consultant will contact you
            with pricing, availability, floor plans and payment options.
          </p>
        </div>

        {/* Form */}
        <div className="w-full rounded-3xl bg-[#fdfdfd] p-5 sm:p-7 md:w-1/2">
          
          <p className="text-base font-semibold uppercase tracking-[0.15em] sm:text-lg sm:tracking-[0.18em]">
            GET PROJECT DETAILS
          </p>

          <ContactForm />

        </div>
      </div>
    </section>
  );
};

export default Contact;
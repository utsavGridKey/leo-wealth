const OurServices = () => {
  return (
    <section className="bg-background-200 flex flex-col gap-4 px-4 py-15 pb-20 sm:px-16 sm:pb-24 md:px-17.5 lg:px-42 lg:pb-30 xl:px-60">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <p className="text-grey-500 font-['Inter'] text-[12px] leading-[160%] font-medium tracking-[2.4px] uppercase">
            Our services
          </p>

          <h2
            style={{
              color: "var(--black-600, #111)",
              fontFamily: '"Libre Caslon Text"',
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "130%",
            }}
          >
            Wealth, Handled With Perspective
          </h2>

          <p className="text-grey-500 max-w-xl text-sm leading-relaxed sm:text-base">
            We begin by understanding how wealth actually shows up in your life.
            Not as figures on a statement, but as choices, responsibilities, and
            moments that require judgment.
          </p>
          <p className="text-grey-500 max-w-xl text-sm leading-relaxed sm:text-base">
            Our services are tailored to meet those realities, whether the need
            is for growth, protection, transition, or control. Each offering is
            designed to feel considered, practical, and steady enough to live
            with over time.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/services.png"
            alt="Experience Guided by Judgment Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;

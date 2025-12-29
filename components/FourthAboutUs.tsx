const FourthAboutUs = () => {
  return (
    <section className="px-6 py-4 sm:px-16 lg:px-42 lg:py-20 xl:px-78">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
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
            Built for Indian Wealth
          </h2>

          <p className="text-grey-500 max-w-xl text-sm leading-relaxed sm:text-base">
            Indian wealth is shaped by family, business, and shared
            responsibility. Ownership is rarely singular. Decisions carry memory
            and expectation.
          </p>

          <p className="text-grey-500 max-w-xl text-sm leading-relaxed sm:text-base">
            We work within this reality every day. The approach stays grounded,
            practical, and free of noise. Structure is added only where it
            brings clarity, allowing wealth to move forward without losing its
            footing.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/family.png"
            alt="Experience Guided by Judgment Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default FourthAboutUs;

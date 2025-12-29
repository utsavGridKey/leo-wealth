const SecondAboutUs = () => {
  return (
    <section className="px-6 py-4 sm:px-16 lg:px-42 lg:py-20 xl:px-78">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <p className="text-grey-500 text-xs tracking-widest uppercase">
            About the team
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
            Experience Guided by Judgment
          </h2>

          <p className="text-grey-500 max-w-xl text-sm leading-relaxed sm:text-base">
            Every decision is discussed, tested, and aligned before it is
            executed. The focus stays on outcomes that age well.
          </p>

          <p className="text-grey-500 max-w-xl text-sm leading-relaxed sm:text-base">
            The team brings together experience across investments, private
            wealth advisory, structuring, taxation, governance, and
            multi-generational planning.
          </p>

          <p className="text-grey-500 max-w-xl text-sm leading-relaxed sm:text-base">
            Nothing is rushed. <br />
            Nothing is isolated. <br />
            Nothing exists for short-term optics.
          </p>

          <p className="text-grey-500 max-w-xl text-sm leading-relaxed sm:text-base">
            Every decision is discussed, tested, and aligned before it is
            executed. The focus stays on outcomes that age well.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/paper-boat.png"
            alt="Experience Guided by Judgment Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondAboutUs;

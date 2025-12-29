const ThirdAboutUs = () => {
  return (
    <section className="px-6 py-4 sm:px-16 lg:px-42 lg:py-20 xl:px-78">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* IMAGE — LEFT */}
        <div className="order-1 flex justify-center lg:order-1 lg:justify-start">
          <img
            src="/stone-img.png"
            alt="Experience Guided by Judgment Illustration"
          />
        </div>

        {/* TEXT — RIGHT */}
        <div className="order-2 flex flex-col items-center gap-4 text-center lg:order-2 lg:items-start lg:text-left">
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
            How We Think and Work
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-[#707070]">
            Wealth works best when it is placed in context. Chasing growth
            without perspective creates fragility. Guarding capital without
            movement creates stagnation. The work lives in the balance.
          </p>

          <p className="max-w-xl text-base leading-relaxed text-[#707070]">
            Every decision is viewed alongside liquidity, responsibility,
            succession, and time. Advice and execution stay close, so intent is
            not lost as families evolve and markets change. The experience feels
            calm, considered, and clear.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThirdAboutUs;

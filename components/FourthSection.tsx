"use client";

const FourthSection = () => {
  return (
    <section className="bg-background-200 gap-4 px-6 py-16 md:px-10 md:py-20 lg:px-24">
      {/* Heading */}
      <p className="text-grey-500 text-center text-sm">Our Services</p>

      <p className="text-center font-['libre'] text-2xl font-semibold sm:text-3xl md:text-4xl">
        Holistic Wealth Management Under One Roof
      </p>

      <p className="text-grey-500 mx-auto mt-3 max-w-3xl text-center text-sm sm:text-base">
        We work closely with those who carry both expectation and
        responsibility, the creators of first-generation success and the
        custodians of long-standing legacies.
      </p>

      {/* Cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Family Wealth Planning",
            subTitle:
              "Building a roadmap aligned to your family's life goals, risk, and aspirations",
          },
          {
            title: "Private Wealth Advisory",
            subTitle:
              "Tailored investment strategies across equity, PMS, AIF, mutual funds, fixed income, private equity, structured products and alternative opportunities.",
          },
          {
            title: "Financial & Goal Planning",
            subTitle:
              "A detailed roadmap for life goals, education, business succession, retirement, philanthropy, and more.",
          },
          {
            title: "Estate & Succession Planning",
            subTitle:
              "Structuring legacies that stand the test of time. Trusts, wills, and family charters crafted with legal precision and emotional intelligence.",
          },
          {
            title: "Family Office Services",
            subTitle:
              "Consolidated portfolio reporting, inter-generational planning, governance structures, and concierge financial management for ultra-wealthy families.",
          },
          {
            title: "Insurance & Risk Management",
            subTitle:
              "Ensuring wealth protection with curated life, health, key-man, and business-continuity coverages.",
          },
          {
            title: "Private Market Access",
            subTitle:
              "Access curated private market opportunities from pre-IPO to real assets to grow long-term wealth.",
          },
          {
            title: "Capital Advisory & Fundraising",
            subTitle:
              "We connect visionary founders and promoters with capital — structuring, raising, and aligning fund raise through our network of private investors and institutional partners.",
          },
        ].map(({ title, subTitle }, index) => (
          <div
            key={index}
            className="rounded-lgp-6 flex flex-col items-start gap-6 p-4 text-center"
          >
            <img src={`/fourth-section-img-${index + 1}.svg`} alt="" />{" "}
            <div>
              <p className="text-start font-['libre'] text-base font-semibold">
                {title}
              </p>
              <p className="text-grey-500 text-start text-sm leading-relaxed">
                {subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourthSection;

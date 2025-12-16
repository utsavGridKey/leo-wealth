"use client";

const SixthSection = () => {
  return (
    <section className="bg-white-400 flex flex-col gap-6 px-6 py-16 sm:px-16 md:px-17.5 lg:px-42 xl:px-78">
      <p className="text-grey-600 text-start font-['libre'] text-2xl font-semibold sm:text-3xl md:text-4xl">
        Built for Indian Capital.
        <br /> Built for Indian Values.{" "}
      </p>
      <img src="/sizth-img.svg" alt="" />
      <div>
        {[
          {
            title: "Indian wealth has its own rhythm:",
            subTitle:
              "Family-centric, opportunity-driven, and deeply rooted in responsibility.",
          },
          {
            title: "We know what defines Indian wealth management:",
            subTitle: `The balance between ambition and assurance, liquidity and legacy, growth and respect for tradition.<br/>Our approach reflects how Indian investors build wealth, diversify portfolios, and safeguard family assets.<br/>And how <b>Indian families protect their legacy</b> across generations.`,
          },
        ].map((item, index) => {
          return (
            <div key={index} className="flex items-baseline gap-2">
              <img src="/check-fill.svg" alt="" />
              <div>
                <p className="text-grey-600 text-start font-['libre'] text-lg font-semibold">
                  {item.title}
                </p>
                <div
                  className="text-grey-500"
                  dangerouslySetInnerHTML={{
                    __html: item.subTitle,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SixthSection;

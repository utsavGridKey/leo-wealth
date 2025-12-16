"use client";
import { Activity, useState } from "react";

const SecondSection = () => {
  const [selectedSection, setselectedSection] = useState(0);

  return (
    <section className="flex flex-col gap-3 px-6 py-30 md:px-10 lg:px-78">
      <p className="text-center font-[libre] text-3xl font-semibold">
        The Architecture of Enduring Wealth
      </p>
      <p className="text-grey-500 text-center">
        We design wealth like architecture: planned, precise, and strong enough
        to weather every cycle.
      </p>
      <div className="flex w-full items-center justify-center gap-4 pt-14">
        <div className="w-1/2">
          {[
            {
              title: "Diagnose",
              subTitle:
                "We begin with understanding your priorities, obligations, liquidity needs, and the emotional landscape that surrounds them.",
            },
            {
              title: "Design",
              subTitle:
                "A tailored asset architecture built around purpose, not products.",
            },
            {
              title: "Deploy",
              subTitle:
                "Direct management supported by curated external managers, giving you both expertise and access.",
            },
            {
              title: "Defend",
              subTitle:
                "Continuous oversight, risk intelligence, and strategy alignment to protect wealth through seasons of change.",
            },
          ]?.map(({ title, subTitle }, index) => {
            return (
              <button
                className="flex w-full cursor-pointer flex-col items-start gap-2 p-2"
                key={index}
                onClick={() => {
                  setselectedSection(index);
                }}
              >
                <p className="font-[libre] text-lg">{title}</p>
                <Activity
                  mode={selectedSection === index ? "visible" : "hidden"}
                >
                  <p className="text-grey-500 text-start">{subTitle}</p>
                </Activity>
              </button>
            );
          })}
        </div>
        <div className="w-1/2">
          <img src={`/second-section-img-${selectedSection + 1}.svg`} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

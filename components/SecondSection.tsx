"use client";
import { motion } from "motion/react";
import { Activity, useState } from "react";

const SecondSection = () => {
  const [selectedSection, setselectedSection] = useState(0);

  const data = [
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
  ];

  return (
    <motion.section className="grid gap-3 px-6 py-4 sm:px-16 md:px-17.5 lg:px-42 lg:py-30 xl:px-78">
      <motion.p
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{
          once: true,
        }}
        className="col-span-12 text-center font-[libre] text-3xl font-semibold"
      >
        The Architecture of Enduring Wealth
      </motion.p>

      <motion.p
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        viewport={{
          once: true,
        }}
        className="text-grey-500 col-span-12 text-center"
      >
        We design wealth like architecture: planned, precise, and strong enough
        to weather every cycle.
      </motion.p>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        viewport={{
          once: true,
        }}
        className="col-span-12 hidden grid-cols-12 items-center gap-6 lg:grid"
      >
        {/* Left content */}
        <div className="col-span-12 lg:col-span-6">
          {data.map(({ title, subTitle }, index) => (
            <button
              key={index}
              onClick={() => setselectedSection(index)}
              className="flex w-full flex-col items-start gap-2 p-2 text-left"
            >
              <p className="font-[libre] text-lg">{title}</p>
              <Activity mode={selectedSection === index ? "visible" : "hidden"}>
                <p className="text-grey-500">{subTitle}</p>
              </Activity>
            </button>
          ))}
        </div>

        {/* Right image */}
        <div className="col-span-12 hidden justify-center lg:col-span-6 lg:flex">
          <img
            src={`/${data[selectedSection].title.toLowerCase()}.webp`}
            alt=""
            className="max-w-full"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        viewport={{
          once: true,
        }}
        className="col-span-12 grid grid-cols-12 items-center gap-6 lg:hidden"
      >
        {/* Left content */}
        <div className="col-span-12 lg:col-span-6">
          {data
            .filter((_, index) => selectedSection === index)
            .map(({ title, subTitle }, index) => (
              <button
                key={index}
                onClick={() => setselectedSection(index)}
                className="flex w-full flex-col items-center gap-2 p-2 text-left"
              >
                <img
                  src={`/second-section-img-${selectedSection + 1}.svg`}
                  alt=""
                  width={"100%"}
                />
                <p className="font-[libre] text-lg">{title}</p>
                <p className="text-grey-500 text-center">{subTitle}</p>
              </button>
            ))}
        </div>
        <div className="col-span-12 flex items-center justify-center gap-5">
          <button
            onClick={() => {
              if (selectedSection === 0) {
                setselectedSection(data.length - 1);
              } else {
                setselectedSection((pre) => pre - 1);
              }
            }}
          >
            <img src="/right-arrow.svg" alt="" className="rotate-180" />
          </button>
          <button
            onClick={() => {
              if (selectedSection === data.length - 1) {
                setselectedSection(0);
              } else {
                setselectedSection((pre) => pre + 1);
              }
            }}
          >
            <img src="/right-arrow.svg" alt="" />
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SecondSection;

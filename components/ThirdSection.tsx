"use client";

import { motion } from "motion/react";

const ThirdSection = () => {
  return (
    <section className="flex flex-col gap-3 px-4 py-30 sm:px-16 md:px-17.5 lg:px-42 xl:px-78">
      <motion.p
        viewport={{
          once: true,
        }}
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="text-center font-[libre] text-3xl font-semibold"
      >
        India’s Circle of Continuity{" "}
      </motion.p>
      <motion.p
        viewport={{
          once: true,
        }}
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="text-grey-500 text-center"
      >
        We work closely with those who carry both expectation and
        responsibility, the creators of first-generation success and the
        custodians of long-standing legacies.
      </motion.p>
      <div className="flex w-full items-center justify-center gap-4 pt-14">
        <div className="flex w-full gap-6 overflow-x-auto overflow-y-hidden">
          {[
            {
              title: "For Wealth Creators",
              subTitle:
                "Entrepreneurs, founders, and promoters building capital faster than traditional frameworks can adapt.",
              image: "",
            },
            {
              title: "For Wealth Preservers",
              subTitle:
                "Inheritors and successors transitioning from accumulation to allocation, oversight, and governance.",
              image: "",
            },
            {
              title: "For Family Offices",
              subTitle:
                "Those institutionalizing family capital with structure, governance, and collective decision frameworks.",
              image: "",
            },
          ]?.map(({ title, subTitle }, index) => {
            return (
              <motion.button
                viewport={{
                  once: true,
                }}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className="flex w-full cursor-pointer flex-col items-start gap-4 overflow-hidden p-2"
                key={index}
              >
                <img src={`/third-section-img-${index + 1}.webp`} alt="" />
                <div className="flex flex-col gap-2">
                  <p className="w-full text-center font-[libre] text-lg font-semibold">
                    {title}
                  </p>
                  <p className="text-grey-500 text-center">{subTitle}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;

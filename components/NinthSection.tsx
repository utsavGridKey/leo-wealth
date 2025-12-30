"use client";

import { motion } from "motion/react";
import { useState } from "react";

const NinthSection = () => {
  const [selectedItem, setselectedItem] = useState<{
    title: string;
    name: string;
    designation: string;
    image: string;
  }>({
    title: "Wealth lasts when decisions are made with tomorrow in mind.",
    name: "Ritesh Lahoti",
    designation: "Managing Director & CEO (Co-founder)",
    image: "/r-photo.png",
  });

  return (
    <section className="flex flex-col px-6 py-16 sm:px-16 md:px-17.5 md:py-32 lg:px-42 xl:px-78">
      <motion.p
        viewport={{
          once: true,
        }}
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="text-grey-600 text-center font-['libre'] text-2xl font-semibold sm:text-3xl md:text-4xl"
      >
        The Custodians of Clarity{" "}
      </motion.p>
      <motion.p
        viewport={{
          once: true,
        }}
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
          delay: 0.2,
        }}
        className="text-grey-500 mb mx-auto mt-3 mb-10 max-w-3xl text-center text-sm sm:text-base"
      >
        Our leadership team combines expertise across investment strategy,
        wealth advisory, tax, structuring, governance, and multi-generational
        planning. Together, they shape a unified, client-first philosophy that
        drives every decision at Leo Wealth.
      </motion.p>
      <div className="flex flex-col items-center gap-12 md:gap-16 lg:flex-row lg:items-center lg:gap-18">
        <div className="flex flex-row items-start gap-6 md:flex-row lg:flex-col lg:items-center lg:gap-8">
          {[
            {
              title:
                "Wealth lasts when decisions are made with tomorrow in mind.",
              name: "Ritesh Lahoti",
              designation: "Managing Director & CEO (Co-founder)",
              image: "/r-photo.png",
            },
            {
              title: "Structure is not visible, but its absence always is.",
              name: "Priyanka Lahoti",
              designation: "Managing Director & CEO (Co-founder)",
              image: "",
            },
            {
              title: "Financial freedom begins with smart investments.",
              name: "Deep Jethloja",
              designation: "Managing Director & CEO (Co-founder)",
              image: "/d-photo.jpg",
            },
          ].map((item, index) => {
            return (
              <motion.div
                viewport={{
                  once: true,
                }}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.4,
                }}
                key={index}
                className="flex w-full gap-20"
                onClick={() => {
                  setselectedItem(item);
                }}
              >
                <div className="flex flex-col items-center gap-1 lg:flex-row">
                  <div className="h-30 w-30 shrink-0 overflow-hidden rounded-full bg-gray-300">
                    <img
                      src={item.image || undefined}
                      alt=""
                      className={`h-full w-full object-cover object-[50%_20%] transition duration-300 ${
                        selectedItem.name === item.name
                          ? "grayscale-0"
                          : "grayscale"
                      }`}
                    />
                  </div>

                  <div className="flex w-14 justify-center md:mt-2 lg:mt-0">
                    {selectedItem.name === item.name && (
                      <img
                        src="/filled-right-arrow.svg"
                        alt=""
                        width={53}
                        height={53}
                        className="rotate-90 transition-transform duration-300 lg:rotate-0"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          viewport={{
            once: true,
          }}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 0.6,
          }}
          className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left"
        >
          <img
            src="/qoutes.svg"
            alt=""
            className="self-start md:self-start lg:self-start"
          />
          <p className="font-[libre] text-[48px]">{selectedItem?.title}</p>
          <div className="flex flex-col items-start">
            <p>{selectedItem?.name}</p>
            <p>{selectedItem?.designation}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NinthSection;

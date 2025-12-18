"use client";

import { motion } from "motion/react";

const EighthSection = () => {
  return (
    <section className="bg-white-100 flex flex-col gap-4 px-4 py-16 sm:px-16 md:px-17.5 lg:px-42 xl:px-78">
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
        Great Outcomes Are Rarely the Work of One
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
        className="text-grey-500 mx-auto mt-3 max-w-3xl text-center text-sm sm:text-base"
      >
        Behind every intelligent portfolio lies a network of excellence.
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
          delay: 0.4,
        }}
        className="text-grey-500 mx-auto mt-3 max-w-3xl text-center text-sm sm:text-base"
      >
        Our strength comes from a network of partners, fund managers, and
        experts, ensuring your family’s capital moves with precision and
        confidence.{" "}
      </motion.p>
      <motion.img
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
        src="/infographic-img.svg"
        alt=""
      />
    </section>
  );
};

export default EighthSection;

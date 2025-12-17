"use client";

import { motion } from "motion/react";
import { section } from "motion/react-client";

const FifthSection = () => {
  return (
    <section className="bg-black-600 flex flex-col items-center gap-6 px-4 py-16 sm:px-16 md:px-17.5 lg:px-42 xl:px-78">
      <motion.img
        viewport={{
          once: true,
        }}
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        src="/fifth-section.svg"
        alt=""
      />
      <motion.p
        viewport={{
          once: true,
        }}
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.2,
        }}
        className="text-grey-100 text-center font-['libre'] text-2xl font-semibold sm:text-3xl md:text-4xl"
      >
        Where Strategy Meets Execution
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
          delay: 0.4,
        }}
        className="text-grey-300 mx-auto mt-3 max-w-3xl text-center text-xl italic sm:text-base"
      >
        Most firms either advise without access, or distribute without
        context.Leo Wealth was built differently.
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
          delay: 0.6,
        }}
        className="text-grey-300 mx-auto mt-3 max-w-3xl text-center text-xl italic sm:text-base"
      >
        We are both:
        <br />
        Your strategic advisor and your distribution partner. Your architect and
        your executor.
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
          delay: 0.8,
        }}
        className="text-grey-300 mx-auto mt-3 max-w-3xl text-center text-xl italic sm:text-base"
      >
        This dual capability ensures: One plan. One lens. One accountable
        outcome.
      </motion.p>
    </section>
  );
};

export default FifthSection;

"use client";

import { motion } from "motion/react";

const TenthSection = () => {
  return (
    <section className="bg-black-600 flex flex-col items-center gap-6 overflow-hidden px-4 py-16 sm:px-16 md:px-17.5 lg:px-42 xl:px-78">
      <motion.img
        viewport={{
          once: true,
        }}
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        src="/book-icon.svg"
        alt=""
      />
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
        className="text-grey-100 text-center font-['libre'] text-2xl font-semibold sm:text-3xl md:text-4xl"
      >
        Your Next Chapter Begins With Dialogue
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
        className="text-grey-300 mx-auto mt-3 max-w-3xl text-center text-xl italic sm:text-base"
      >
        Whether you are creating wealth or transferring it, centralizing
        decisions or delegating responsibility, clarity begins with
        conversation.
        <br />
        <br />
        We invite you to step into a space where wealth is discussed quietly,
        handled intelligently, and planned purposefully.
      </motion.p>
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
        className="mt-16 flex items-center gap-4"
      >
        <button className="border-white-600 text-white-600 rounded-sm border p-4">
          Meet the Leo Team
        </button>
        <button className="bg-white-600 rounded-sm border p-4">
          Request a Private Consultation
        </button>
      </motion.div>
    </section>
  );
};

export default TenthSection;

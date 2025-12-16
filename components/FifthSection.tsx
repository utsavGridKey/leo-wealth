"use client";

const FifthSection = () => {
  return (
    <section className="bg-black-600 flex flex-col items-center gap-6 px-4 py-16 sm:px-16 md:px-17.5 lg:px-42 xl:px-78">
      <img src="/fifth-section.svg" alt="" />
      <p className="text-grey-100 text-center font-['libre'] text-2xl font-semibold sm:text-3xl md:text-4xl">
        Where Strategy Meets Execution
      </p>
      <p className="text-grey-300 mx-auto mt-3 max-w-3xl text-center text-xl italic sm:text-base">
        Most firms either advise without access, or distribute without
        context.Leo Wealth was built differently.
      </p>

      <p className="text-grey-300 mx-auto mt-3 max-w-3xl text-center text-xl italic sm:text-base">
        We are both:
        <br />
        Your strategic advisor and your distribution partner. Your architect and
        your executor.
      </p>

      <p className="text-grey-300 mx-auto mt-3 max-w-3xl text-center text-xl italic sm:text-base">
        This dual capability ensures: One plan. One lens. One accountable
        outcome.
      </p>
    </section>
  );
};

export default FifthSection;

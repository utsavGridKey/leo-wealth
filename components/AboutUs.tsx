"use client";

const AboutUs = () => {
  return (
    <section className="flex flex-col gap-4 px-4 py-5 sm:px-16 md:px-17.5 lg:px-42 xl:px-78">
      <div className="text-grey-500 mt-10 text-center font-['Inter'] text-[12px] leading-[160%] font-medium tracking-[2.4px] uppercase">
        About Leo Wealth
      </div>

      <div className="text-center font-['libre'] text-2xl font-semibold sm:text-3xl md:text-4xl">
        Built for Decisions That Outlast Time
      </div>

      <div className="text-grey-500 mx-auto max-w-3xl text-center text-sm sm:text-base">
        There comes a point when creating wealth is no longer the question.
        Knowing how to carry it forward is.
      </div>
      <div className="text-grey-500 mx-auto max-w-3xl text-center text-sm sm:text-base">
        Leo Wealth works with families and entrepreneurs who think beyond the
        immediate. Who care as much about continuity as they do about
        performance. Here, wealth is not treated as a transaction to optimize,
        but as something that needs direction and care. Capital is expected to
        work, but always with purpose. Because the decisions you make today
        shape far more than the present.
      </div>
      <img src="/Rectangle.png" alt="" />
    </section>
  );
};

export default AboutUs;

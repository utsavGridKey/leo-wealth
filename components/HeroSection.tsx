const HeroSection = () => {
  return (
    <section className="grid min-h-screen place-items-center bg-[url('/hero-image.svg')] bg-cover bg-center bg-no-repeat p-4 sm:px-16 md:px-17.5 lg:px-42 xl:px-78">
      <div className="col-span-12 grid justify-items-center gap-4 text-center sm:col-span-6">
        <p className="max-w-3xl font-['libre'] text-lg font-medium sm:text-xl md:text-5xl">
          For Those Who Think Beyond a Lifetime.
        </p>

        <p className="text-grey-500 max-w-2xl text-sm sm:text-base md:text-lg">
          We partner with India’s most distinguished families and entrepreneurs
          to create enduring wealth across generations.
        </p>

        <button className="bg-black-600 rounded-sm px-6 py-3 text-sm font-medium text-white sm:text-base">
          Request a Private Consultation
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

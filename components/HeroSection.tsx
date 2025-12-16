const HeroSection = () => {
  return (
    <section className="min-h-screen w-full bg-[url('/hero-image.svg')] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-4 px-4 text-center sm:gap-5 md:gap-6">
        <p className="max-w-3xl font-['libre'] text-lg font-medium sm:text-xl md:text-5xl">
          For Those Who Think Beyond a Lifetime.
        </p>

        <p className="text-grey-500 max-w-2xl text-sm sm:text-base md:text-lg">
          We partner with India’s most distinguished families and entrepreneurs
          to create enduring wealth across generations.
        </p>

        <button className="bg-black-600 rounded-sm p-4 text-sm font-medium text-white sm:px-6 sm:py-2.5 sm:text-base">
          Request a Private Consultation
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

const SeventhSection = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="container mx-auto flex flex-col items-center justify-center gap-12 px-6 py-12 md:flex-row md:justify-between md:px-12 md:py-24 lg:gap-24 lg:px-24">
        {/* Text Column */}
        <div className="flex max-w-lg shrink-0 flex-col items-start gap-8 md:max-w-xl">
          <div className="flex flex-col gap-4">
            <h1 className="font-['Libre_Caslon_Text',serif] text-3xl leading-[1.2] font-semibold text-[#333] md:text-4xl">
              The Power of Visibility.
              <br />
              The Clarity of Control.
            </h1>
            <p className="max-w-md font-['Inter',sans-serif] text-sm leading-[1.6] font-medium text-[#707070] md:text-base">
              Our proprietary platform Vault, gives clients a unified view of
              their entire financial world, every asset class, every account,
              every family member.
            </p>
          </div>

          {/* Download Section */}
          <div className="flex flex-row items-end gap-8 pt-4">
            <div className="flex flex-col gap-4">
              <p className="font-['Inter',sans-serif] text-[10px] leading-[1.6] font-medium text-[#707070]">
                Download the mobile
                <br />
                application today
              </p>
            </div>
            {/* QR Code */}
            <div className="h-[74px] w-[74px] shrink-0">
              <img
                alt="Scan to download"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative w-full max-w-md shrink-0 md:max-w-[453px]">
          <div className="relative aspect-[453/626] w-full">
            <img
              alt="App Screenshot"
              src={"/app-screenshot.svg"}
              className="absolute inset-0 h-full w-full scale-[1.02] object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;

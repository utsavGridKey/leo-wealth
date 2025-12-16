"use client";

import { useState } from "react";

const NinthSection = () => {
  const [selectedItem, setselectedItem] = useState<{
    title: string;
    name: string;
    designation: string;
    image: string;
  }>();

  return (
    <section className="flex flex-col px-6 py-16 sm:px-16 md:px-17.5 md:py-32 lg:px-42 xl:px-78">
      <p className="text-grey-600 text-center font-['libre'] text-2xl font-semibold sm:text-3xl md:text-4xl">
        The Custodians of Clarity{" "}
      </p>
      <p className="text-grey-500 mx-auto mt-3 max-w-3xl text-center text-sm sm:text-base">
        Our leadership team combines expertise across investment strategy,
        wealth advisory, tax, structuring, governance, and multi-generational
        planning. Together, they shape a unified, client-first philosophy that
        drives every decision at Leo Wealth.
      </p>
      <div className="flex items-center gap-18">
        <div className="flex flex-col items-center gap-8">
          {[
            {
              title:
                "Investing is planting seeds today for a harvest tomorrow.",
              name: "Gustavo Culhane",
              designation: "Managing Director & CEO (Co-founder)",
              image: "",
            },
            {
              title: "Investing is the bridge between your dreams and reality.",
              name: "Gustavo Culhane",
              designation: "Managing Director & CEO (Co-founder)",
              image: "",
            },
            {
              title: "Financial freedom begins with smart investments.",
              name: "Gustavo Culhane",
              designation: "Managing Director & CEO (Co-founder)",
              image: "",
            },
          ].map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full gap-20"
                onClick={() => {
                  setselectedItem(item);
                }}
              >
                <div className="flex gap-2">
                  <img src="/globe.svg" alt="" width={120} height={120} />
                  <img
                    src="/filled-right-arrow.svg"
                    alt=""
                    width={53}
                    height={53}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-start gap-4">
          <img src="/qoutes.svg" alt="" />
          <p className="font-[libre] text-[48px]">{selectedItem?.title}</p>
          <div className="flex flex-col items-start">
            <p>{selectedItem?.name}</p>
            <p>{selectedItem?.designation}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NinthSection;

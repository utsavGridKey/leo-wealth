export default function Disclosure() {
  return (
    <section className="flex flex-col gap-4 px-6 pt-4 pb-16 sm:px-16 lg:px-42 lg:pt-15 lg:pb-30 xl:px-100">
      <p
        className="text-3xl font-semibold"
        style={{
          fontFamily: '"Libre Caslon Text"',
          color: "var(--black-600, #111)",
          lineHeight: "130%",
        }}
      >
        Common Entity Disclaimer
      </p>
      <p className="text-grey-500 text-justify text-base leading-relaxed">
        The material presented on this website is issued by Leo Wealth and its
        associated entities (collectively referred to as “Leo Wealth”). The
        information contained herein has been prepared using a combination of
        publicly available sources, proprietary analysis, and information
        obtained from third parties believed to be reliable.
      </p>
      <p className="text-grey-500 text-justify text-base leading-relaxed">
        While reasonable care has been taken in the preparation of this
        material, Leo Wealth does not warrant the accuracy, completeness, or
        timeliness of any information, illustration, or opinion expressed. All
        content is provided for general informational purposes only and should
        not be construed as a recommendation, solicitation, or offer to buy,
        sell, or engage in any financial instrument, product, or transaction.
      </p>
      <p className="text-grey-500 text-justify text-base leading-relaxed">
        Any illustrations or references are indicative in nature. Market
        assumptions, estimates, and risk disclosures are subject to change and
        may differ materially from actual outcomes. Past performance is not
        indicative of future results, and no assurance or guarantee of returns
        is provided.
      </p>
      <p className="text-grey-500 text-justify text-base leading-relaxed">
        In forming views or opinions, Leo Wealth may rely on applicable Indian
        laws, regulations, and prevailing interpretations as of the date of
        publication. These are subject to amendment, modification, or judicial
        interpretation over time. Leo Wealth does not undertake any obligation
        to update this material or notify recipients of changes in law,
        regulation, facts, or circumstances.
      </p>
      <p className="text-grey-500 text-justify text-base leading-relaxed">
        Investment products and financial instruments involve market risk and
        may not be suitable for all investors. Recipients are advised to
        independently evaluate the appropriateness of any investment, review all
        relevant documentation carefully, and seek professional advice where
        necessary before making any financial decision.
      </p>
      <p className="text-grey-500 text-justify text-base leading-relaxed">
        Leo Wealth, its affiliates, and their respective directors, officers,
        employees, and representatives shall not be liable for any loss or
        damage of any nature, whether direct or indirect, arising from reliance
        on or use of this material. Any decision taken based on this information
        is the sole responsibility of the recipient.
      </p>
      <p className="text-grey-500 text-justify text-base leading-relaxed">
        This material is confidential and intended solely for the use of the
        intended recipient. It may not be reproduced, redistributed, or
        disclosed, in whole or in part, without prior written consent from Leo
        Wealth.
      </p>
      <p className="text-grey-500 text-justify text-base leading-relaxed">
        Registration with regulatory authorities, including SEBI, membership of
        industry bodies, or certifications, does not imply any assurance of
        performance or returns.
      </p>
      <p className="text-grey-500 text-justify text-base leading-relaxed">
        Non-resident recipients are responsible for ensuring compliance with
        applicable foreign exchange and securities regulations, including those
        prescribed by the Reserve Bank of India, where relevant.
      </p>
    </section>
  );
}

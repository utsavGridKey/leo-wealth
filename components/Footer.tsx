import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black-500 px-6 py-16 sm:px-16 md:py-24 lg:px-42 xl:px-78">
      {/* Top */}
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:justify-between">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <img className="h-8 w-44" src="/brand-logo.svg" />

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <p className="text-white-600 text-sm font-semibold tracking-[2.94px] uppercase">
              Quick links
            </p>
            <div className="text-grey-100 flex flex-col gap-2 text-sm">
              <Link
                href="/disclosure"
                className="underline-offset-4 hover:underline"
              >
                Disclosure
              </Link>
              <Link
                href="/privacy-policy"
                className="underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="underline-offset-4 hover:underline"
              >
                Terms & Condition
              </Link>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-6">
            {[
              {
                link: "",
                icon: "/instagram.svg",
              },
              {
                link: "",
                icon: "/linkedin.svg",
              },
              {
                link: "",
                icon: "/twitter.svg",
              },
              {
                link: "",
                icon: "/facebook.svg",
              },
            ].map((i) => (
              <div
                key={i.icon}
                className="flex h-10 w-10 items-center justify-center rounded-full"
              >
                <img src={i.icon} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex max-w-md flex-col gap-6">
          <p className="text-white-600 text-sm font-semibold tracking-[2.94px] uppercase">
            Contact details
          </p>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <p className="text-grey-400 text-sm">Email Id</p>
            <p className="text-white-600 text-sm">hello@offsocial.in</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <p className="text-grey-400 text-sm">Phone No.</p>
            <p className="text-white-600 text-sm">+91 99044 67772</p>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1">
            <p className="text-grey-400 text-sm">Address</p>
            <p className="text-white-600 text-sm leading-6">
              509, International Finance Center, Fire Station, VIP Road, Vesu,
              Surat, Gujarat 395007
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-grey-600 mx-auto mt-12 max-w-7xl border-t pt-4">
        <p className="text-grey-500 text-xs">
          Copyright © 2024 Leo Wealth Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-grey-100 sticky top-0 z-50 w-full border-b bg-white">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3 md:px-8 lg:px-40">
        <Link href="/" className="flex items-center">
          <img src="/brand-logo.svg" alt="Brand Logo" className="h-7 w-auto" />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link
            href="/offerings"
            className="text-grey-600 hover:text-grey-900 text-xs font-medium"
          >
            Our Offerings
          </Link>

          <Link
            href="/about"
            className="text-grey-600 hover:text-grey-900 text-xs font-medium"
          >
            About Us
          </Link>

          <Link
            href="https://vault.example.com"
            target="_blank"
            className="text-grey-600 hover:text-grey-600 flex items-center gap-1 text-xs font-medium"
          >
            Visit Vault Website
            <img src="/visit-website.svg" alt="" />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="border-grey-100 border-t md:hidden">
          <div className="flex flex-col gap-3 px-4 py-4">
            <Link
              href="/offerings"
              className="text-grey-600 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Our Offerings
            </Link>

            <Link
              href="/about"
              className="text-grey-600 text-sm"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <Link
              href="https://vault.example.com"
              target="_blank"
              className="text-grey-600 flex items-center gap-1 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Visit Vault Website
              <img src="/visit-website.svg" alt="" />
            </Link>

            <Link
              href="/contact"
              className="border-grey-300 mt-2 w-fit rounded-lg border px-4 py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

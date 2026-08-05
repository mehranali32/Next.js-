"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "./logo.jpg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="w-full border-b border-white/10 bg-slate-950/95 shadow-2xl shadow-black/20 backdrop-blur-xl">

        {/* ================= NAVBAR ================= */}
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3"
          >
            <div className="relative">

              <div className="absolute -inset-1 rounded-xl bg-linear-to-r from-indigo-500 to-purple-500 opacity-60 blur-sm transition duration-300 group-hover:opacity-100" />

              <Image
                src={LogoImage}
                alt="AniCare Logo"
                width={42}
                height={42}
                priority
                className="relative h-10 w-10 rounded-xl object-cover ring-1 ring-white/20"
              />

            </div>

            <div className="hidden sm:block">
              <span className="block bg-linear-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
                AniCare
              </span>

              <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Animal Care
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:block">

            <ul className="flex items-center gap-1 rounded-xl border border-white/5 bg-white/5 p-1.5">

              {navLinks.map((link, index) => (
                <li key={link.name}>

                  <Link
                    href={link.href}
                    className={`group relative flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 lg:px-5 ${
                      index === 0
                        ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.name}

                    {index !== 0 && (
                      <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-1/2" />
                    )}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* ================= DESKTOP GET STARTED ================= */}
          <div className="hidden md:block">

            <Link
              href="/login"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40 lg:px-5"
            >
              <span className="relative z-10">
                Get Started
              </span>

              <svg
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>

              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </Link>

          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition-all duration-300 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >

            {isOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}

          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="border-t border-white/10 px-4 pb-4 pt-3 sm:px-6">

            <ul className="space-y-1">

              {navLinks.map((link, index) => (
                <li key={link.name}>

                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      index === 0
                        ? "bg-linear-to-r from-indigo-600/90 to-purple-600/90 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:pl-5 hover:text-white"
                    }`}
                  >

                    <span>
                      {link.name}
                    </span>

                    <svg
                      className="h-4 w-4 opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                  </Link>

                </li>
              ))}

              {/* MOBILE GET STARTED */}
              <li className="pt-2">

                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-indigo-500/40"
                >
                  Get Started

                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>

                </Link>

              </li>

            </ul>

          </div>

        </div>

      </nav>
    </header>
  );
};
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950 text-slate-300">

      {/*  MAIN FOOTER  */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/*  BRAND */}
          <div className="lg:col-span-2">

            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-extrabold tracking-tight">
                <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AniCare
                </span>
              </h2>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
              Helping you understand your pets and animals better.
              Discover their behavior, emotions, needs, and learn how
              to take better care of them.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-400"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4V9c0-.6.4-1 1-1z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-400"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.3-8.4L1 2h6.2l4.3 5.7L18.9 2zm-1.1 17.6h1.7L6.3 4.3H4.5l13.3 15.3z" />
                </svg>
              </a>

            </div>
          </div>

          {/*  QUICK LINKS */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">

              <li>
                <Link
                  href="/"
                  className="transition-colors duration-300 hover:text-indigo-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors duration-300 hover:text-indigo-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/animals"
                  className="transition-colors duration-300 hover:text-indigo-400"
                >
                  Animals
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition-colors duration-300 hover:text-indigo-400"
                >
                  Services
                </Link>
              </li>

            </ul>
          </div>

          {/*  SUPPORT */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Support
            </h3>

            <ul className="mt-5 space-y-3 text-sm">

              <li>
                <Link
                  href="/contact"
                  className="transition-colors duration-300 hover:text-purple-400"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition-colors duration-300 hover:text-purple-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition-colors duration-300 hover:text-purple-400"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <a
                  href="mailto:hello@anicare.com"
                  className="transition-colors duration-300 hover:text-purple-400"
                >
                  hello@anicare.com
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* DIVIDER  */}
        <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/*  BOTTOM  */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-slate-500 sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-300">
              AniCare
            </span>
            . All rights reserved.
          </p>

          <p className="text-xs text-slate-500 sm:text-sm">
            Made with{" "}
            <span className="text-pink-400">♥</span>{" "}
            for animal lovers
          </p>

        </div>

      </div>
    </footer>
  );
};
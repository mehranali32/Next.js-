import Image from "next/image";
import BannerImage from "./Banner.jpg";

export const BannerSec = () => {
  return (
    <section className="m-0 w-full bg-slate-950 p-0 pt-16 sm:pt-20">

      {/*  BANNER  */}
      <div className="relative m-0 h-[55vh] w-full overflow-hidden p-0 sm:h-[65vh] md:h-[75vh] lg:h-[80vh]">

        <Image
          src={BannerImage}
          alt="AniCare Banner"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/30 to-slate-950/95" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
          <div className="max-w-3xl">

            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-sm">
              Welcome to AniCare
            </span>

            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Understand Your
              <span className="block bg-linear-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Animals Better
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7 md:text-lg">
              Learn about your pets and animals, understand their behavior,
              emotions, needs, and conditions in different situations.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

              <button className="rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40">
                Explore Animals
              </button>

              <button className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20">
                Learn More
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="w-full px-5 py-12 text-center sm:py-16">

        <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
          About AniCare
        </span>

        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Welcome to{" "}
          <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ANICARE
          </span>
        </h2>

        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-indigo-500 to-purple-500" />

        <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
          We are here to help you understand your pets and other animals.
          Discover their behavior, emotions, needs, and conditions in
          different situations such as hunger, happiness, stress, anger,
          sadness, and many other emotions.
        </p>

      </div>

    </section>
  );
};
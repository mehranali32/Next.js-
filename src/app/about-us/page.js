import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-16">

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <span className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold tracking-wider text-indigo-300">
            ABOUT ANICARE
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            We Help You
            <span className="block bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Understand Animals Better
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            AniCare is a platform created to help pet owners and animal lovers
            understand animal behavior, emotions, needs, health, and everyday
            situations more easily.
          </p>

        </div>
      </section>


      {/* WHO WE ARE */}
      <section className="px-5 py-16 sm:px-8 lg:px-16">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-indigo-500/10">

            <Image
              src="/about-animal.jpg"
              alt="Animals and pets"
              width={900}
              height={600}
              className="h-[350px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[450px]"
            />

          </div>


          {/* CONTENT */}
          <div>

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400">
              Who We Are
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A Better Way To Understand Your Pets
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Animals communicate with us in many different ways. Their
              behavior, body language, sounds, and actions can tell us a lot
              about what they are feeling.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              AniCare brings useful information together in one simple place
              so that pet owners can learn more about their animals and take
              better care of them.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40"
            >
              Explore AniCare →
            </Link>

          </div>

        </div>

      </section>


      {/* OUR PURPOSE */}
      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-5xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400">
            Our Purpose
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Why We Created AniCare
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
            We believe every animal deserves proper care, attention, and
            understanding. Our goal is to make animal-related information
            simple, useful, and accessible for everyone.
          </p>

        </div>


        {/* CARDS */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-indigo-400/30">
            <div className="mb-5 text-4xl">🐾</div>

            <h3 className="text-xl font-bold">
              Understand
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Learn about animal behavior, emotions, habits, and body
              language.
            </p>
          </div>


          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/30">
            <div className="mb-5 text-4xl">❤️</div>

            <h3 className="text-xl font-bold">
              Care
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Discover helpful information that can help you provide better
              everyday care for your pets.
            </p>
          </div>


          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-pink-400/30">
            <div className="mb-5 text-4xl">🔍</div>

            <h3 className="text-xl font-bold">
              Discover
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Explore different animals and learn interesting things about
              their lives and behavior.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="px-5 py-20 text-center sm:px-8">

        <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-400/20 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-transparent p-10 sm:p-14">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Understand Animals Better?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Explore AniCare and discover useful information about your
            favorite animals and pets.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40"
          >
            Explore AniCare →
          </Link>

        </div>

      </section>

    </main>
  );
}
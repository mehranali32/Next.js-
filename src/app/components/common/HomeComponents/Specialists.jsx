import Image from "next/image";

const specialists = [
  {
    name: "Dr. Sarah Wilson",
    role: "Veterinary Doctor",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
    description:
      "Specializes in pet health, everyday animal care, and helping owners understand their pets' needs.",
    experience: "Veterinary Care",
  },
  {
    name: "Dr. James Carter",
    role: "Animal Behavior Specialist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80",
    description:
      "Focuses on animal behavior and communication, helping people better understand pets' moods and actions.",
    experience: "Animal Behavior",
  },
  {
    name: "Dr. Emily Anderson",
    role: "Pet Care Specialist",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80",
    description:
      "Shares practical guidance about responsible pet care, daily routines, nutrition, and animal wellbeing.",
    experience: "Pet Wellness",
  },
];

export const Specialists = () => {
  return (
    <section className="w-full bg-slate-950 px-4 py-16 sm:px-6 md:py-20 lg:px-8">

      {/* ================= HEADING ================= */}
      <div className="mx-auto mb-12 max-w-3xl text-center">

        <span className="inline-block rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
          Our Specialists
        </span>

        <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Meet Our{" "}
          <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Animal Experts
          </span>
        </h2>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-indigo-500 to-purple-500" />

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Learn from animal care professionals and specialists who can help
          you understand animal behavior, health, emotions, and everyday care.
        </p>

      </div>

      {/* ================= DOCTOR CARDS ================= */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

        {specialists.map((specialist) => (
          <article
            key={specialist.name}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/[0.07]"
          >

            {/* ================= IMAGE ================= */}
            <div className="relative h-72 w-full overflow-hidden">

              <Image
                src={specialist.image}
                alt={specialist.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />

              {/* Specialist Badge */}
              <div className="absolute bottom-4 left-4 rounded-xl border border-white/20 bg-black/40 px-4 py-2 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                  {specialist.experience}
                </p>
              </div>

            </div>

            {/* ================= CONTENT ================= */}
            <div className="p-6">

              <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-400">
                {specialist.name}
              </h3>

              <p className="mt-1 text-sm font-semibold text-purple-400">
                {specialist.role}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {specialist.description}
              </p>

              {/* Bottom line */}
              <div className="mt-6 h-px w-full bg-white/10" />

              <button
                type="button"
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-300 transition-all duration-300 hover:text-indigo-400"
              >
                View Specialist

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </div>
          </article>
        ))}

      </div>

      {/* ================= BOTTOM MESSAGE ================= */}
      <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-indigo-400/10 bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 text-center sm:p-8">

        <h3 className="text-xl font-bold text-white sm:text-2xl">
          Better Understanding. Better Care. 🐾
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
          Our goal is to make animal care information simple, useful, and easy
          to understand for every pet owner.
        </p>

      </div>

    </section>
  );
};
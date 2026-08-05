"use client";
import Image from "next/image";
const pets = [
  {
    name: "Cats",
    description:
      "Understand your cat's behavior, mood, and daily needs.",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    tag: "Popular",
  },
  {
    name: "Dogs",
    description:
      "Learn how dogs communicate through behavior and emotions.",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    tag: "Friendly",
  },
  {
    name: "Birds",
    description:
      "Discover bird behavior, emotions, and different conditions.",
    image:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
    tag: "Explore",
  },
  {
    name: "Rabbits",
    description:
      "Understand your rabbit's habits, emotions, and needs.",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
    tag: "Cute",
  },
  {
    name: "Hamsters",
    description:
      "Learn about hamster habits, behavior, care, and emotions.",
    image:
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
    tag: "Tiny",
  },
  {
    name: "Turtles",
    description:
      "Discover turtle behavior, lifestyle, health, and care.",
    image:
      "https://images.unsplash.com/photo-1508697014387-db70aad34f4d?auto=format&fit=crop&w=800&q=80",
    tag: "Calm",
  },
  {
    name: "Fish",
    description:
      "Understand fish behavior, environment, and daily needs.",
    image:
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    tag: "Aquatic",
  },
  {
    name: "Horses",
    description:
      "Learn how horses communicate through behavior and body language.",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80",
    tag: "Strong",
  },
];

export const ProductList = () => {
  return (
    <section className="w-full bg-slate-950 px-4 py-16 sm:px-6 md:py-20 lg:px-8">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center">

        <span className="inline-block rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Pet Care
        </span>

        <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Take Care of Your{" "}
          <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Pets
          </span>
        </h2>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-indigo-500 to-purple-500" />

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Explore helpful information about your favorite animals and learn
          how to understand their behavior, emotions, and needs.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {pets.map((pet) => (
          <article
            key={pet.name}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/4 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/[0.07] hover:shadow-indigo-500/10"
          >

            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden">
<Image
  src={pet.image}
  alt={pet.name}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  className="object-cover transition duration-700 group-hover:scale-110"
/>

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Tag */}
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                {pet.tag}
              </span>
            </div>

            {/* Card Content */}
            <div className="p-5">

              <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-400">
                {pet.name}
              </h3>

              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">
                {pet.description}
              </p>

              {/* Button */}
              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:bg-linear-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white"
              >
                Learn More

                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
              </button>

            </div>
          </article>
        ))}

      </div>
    </section>
  );
};
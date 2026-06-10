import Link from "next/link";
import Button from "./Button";
import FX from "./FX";

export default function Banner() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center p-6 md:p-16 md:gap-5 md:grid-cols-2">
        <div className="space-y-6 md:order-1 order-2 text-center md:text-left">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 ">
            Web Developer • Technical Support
          </span>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Websites that help your business stand out.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-white/70 text-center md:text-left">
            I'm Mario Granados. I design and build fast, modern websites for
            small businesses and individuals, with a focus on performance,
            mobile responsiveness, and SEO.
          </p>

          <div className="flex gap-4 md:flex-wrap justify-center md:justify-start">
            <Link
              href="/contact"
              className="
bg-violet-600
hover:bg-violet-500
text-white
font-semibold
px-6
py-3
rounded-lg
transition-all
hover:scale-105
cursor-pointer
"
            >
              Hire me!
            </Link>
            <Link
              href="/portfolio"
              className="
bg-transparent
border
border-cyan-400
text-cyan-400
hover:bg-cyan-400/10
hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
px-6
py-3
rounded-lg
transition
cursor-pointer
"
            >
              Check Out My Work
            </Link>
          </div>

          <div className="flex gap-8 pt-4 text-white/60">
            <div>
              <p className="text-2xl font-bold text-white">UX/UI</p>
              <p className="text-sm">Moden Designs</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-sm">Responsive Design</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">SEO</p>
              <p className="text-sm">Optimized</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end md:order-2 order-1">
          <div className="relative ">
            <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-2xl -z-10 hidden" />

            <img
              src="/BannerPhoto.png"
              alt="Laptop showcasing web development work"
              className="object-cover object-center overflow-hidden "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

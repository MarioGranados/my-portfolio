import Button from "./Button";
import FX from "./FX";

export default function Banner() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Web Developer • Technical Support
          </span>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Websites that help your business stand out.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            I'm Mario Granados. I design and build fast, modern websites for
            small businesses and individuals, with a focus on performance,
            mobile responsiveness, and SEO.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button btnText="Hire Me" />
            <Button btnText="View My Work" />
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
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-2xl" />

            <img
              src="/laptop.png"
              alt="Laptop showcasing web development work"
              className="relative w-full max-w-md rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative px-6 py-16">

      {/* glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* TOP SECTION: 2 COLUMN LAYOUT */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-left flex flex-col gap-6">
          <h1 className="font-bold text-4xl md:text-5xl">
            Mario Granados
          </h1>

          <h2 className="text-2xl md:text-3xl text-white/80">
            Web Developer & Technical Support
          </h2>

          <p className="text-lg md:text-xl text-white/70">
            I design and build modern, responsive websites for small businesses and
            individuals. My focus is clean design, strong performance, and SEO
            optimization so your site doesn’t just look good — it gets found.
          </p>

          <div className="flex gap-4">
            <Button btnText="Hire Me" />
            <Button btnText="About Me" />
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="flex justify-center md:justify-end">
          <div
            className="h-64 w-64 md:h-80 md:w-80 bg-cover bg-center rounded-xl shadow-lg"
            style={{ backgroundImage: "url('/laptop.png')" }}
          />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative z-10 mt-16 text-center max-w-3xl mx-auto">
        <h4 className="font-bold text-3xl mb-2">
          Let me make you a site!
        </h4>

        <p className="text-lg md:text-xl text-white/70">
          From landing pages to full business websites, I help you establish a
          strong online presence and turn visitors into customers.
        </p>
      </div>

    </section>
  );
}
import Link from "next/link";

export default function Showcase() {
  return (
    <section className="text-center py-20 px-6 h-full w-auto">
      <h3 className="text-4xl font-bold mb-4">
        Be My First Customer!
      </h3>

      <p className="max-w-2xl mx-auto text-lg mb-8">
        I'm currently building my freelance web development portfolio and
        looking for businesses and individuals who need a modern website.
        If you're interested in a professional website with responsive design,
        performance, and SEO in mind, I'd love to work with you.
      </p>

      <Link
        href="/contact"
        className="inline-block px-6 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition hover:bg-white/15 hover:scale-105"
      >
        Contact Me
      </Link>
    </section>
  );
}
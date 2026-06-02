export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Text */}
        <div>
          <h1 className="text-5xl font-bold mb-6">About Me</h1>

          <p className="text-xl mb-4">
            Hi, I'm Mario Granados, a freelance web developer focused on
            creating modern, responsive websites for businesses and individuals.
          </p>

          <p className="text-lg mb-4">
            My goal is to help clients establish a strong online presence with
            websites that are fast, visually appealing, and optimized for search
            engines. Whether you need a simple business website or a custom web
            application, I enjoy turning ideas into professional digital
            experiences.
          </p>

          <p className="text-lg mb-6">
            Alongside web development, I have experience in technical support,
            problem solving, and helping people navigate technology with
            confidence. I believe a website should not only look great but also
            provide real value to the people using it.
          </p>

          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3">
              <p className="font-bold text-2xl">Frontend</p>
              <p>React • Next.js • Tailwind</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-3">
              <p className="font-bold text-2xl">Backend</p>
              <p>Java • Spring Boot • MySQL</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <div
            className="h-80 w-80 md:h-96 md:w-96 bg-cover bg-center rounded-2xl border border-white/20 shadow-lg"
            style={{ backgroundImage: "url('/laptop.png')" }}
          />
        </div>

      </div>
    </section>
  );
}
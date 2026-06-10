import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-center gap-6 py-8 p-2 z-10 bg-black/40 backdrop-blur-lg">
      <p className="font-bold">Quick Links</p>
      <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-center">
        <Link className="transition-all duration-300 hover:bg-blue-800 rounded-2xl p-2" href="/">Home</Link>
        <Link className="transition-all duration-300 hover:bg-blue-800 rounded-2xl p-2" href="/services">Services</Link>
        <Link className="transition-all duration-300 hover:bg-blue-800 rounded-2xl p-2" href="/about">About</Link>
        <Link className="transition-all duration-300 hover:bg-blue-800 rounded-2xl p-2" href="/pricing">Pricing</Link>
        <Link className="transition-all duration-300 hover:bg-blue-800 rounded-2xl p-2" href="/seo">SEO</Link>
      </ul>

      <ul className="flex flex-col items-center">
        <p className="font-bold">Contact</p>
        <a className="transition-all duration-300 hover:bg-blue-800 rounded-2xl py-1" href="tel:12105895828">Phone number <span className="font-bold text-blue-300">+1 (210) 589 5828</span></a>
        <a className="transition-all duration-300 hover:bg-blue-800 rounded-2xl py-1" href="mailto:mariogranados.dev@gmail.com">Email: <span className="font-bold text-blue-300">MarioGranados.dev@gmail.com</span></a>
        <p className="font-bold text-blue-200">San Antonio, TX United States</p>
      </ul>

      <div className="text-center">
        <p>Copyright Information</p>
        <ul className="flex justify-center gap-4">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms of Use</Link>
        </ul>
      </div>

    </footer>
  );
}
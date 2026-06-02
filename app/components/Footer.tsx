import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-center gap-6 my-8 p-2 z-10">
      <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-center">
        <p className="font-bold">Quick Links</p>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/seo">SEO</Link>
      </ul>

      <ul className="flex flex-col items-center">
        <p className="font-bold">Contact</p>
        <Link href="#">Phone number</Link>
        <Link href="#">Email</Link>
        <Link href="#">United States</Link>
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
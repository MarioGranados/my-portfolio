export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-center gap-6 my-8 p-2 ">
      <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-center">
        <p className="font-bold">Quick Links</p>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Pricing</a>
        <a href="#">SEO</a>
      </ul>

      <ul className="flex flex-col items-center">
        <p className="font-bold">Contact</p>
        <a href="#">Phone number</a>
        <a href="#">Email</a>
        <a href="#">United States</a>
      </ul>

      <div className="text-center">
        <p>Copyright Information</p>
        <ul className="flex justify-center gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms of Use</a>
        </ul>
      </div>

    </footer>
  );
}
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Card from "./components/Card";
import PricingCard from "./components/PricingCards";
import PricingSection from "./components/PricingSection";

export default function Home() {

  return (
    <div className="">
      <Banner />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Modern Web Design"
          text="Clean, professional websites designed to build trust, improve user experience, and help visitors take action."
          imagePath="responsive.png"
        />

        <Card
          title="SEO Optimization"
          text="Built with search engines in mind, helping your website rank higher on Google and attract more potential customers."
          imagePath="SEO.png"
        />

        <Card
          title="Responsive Development"
          text="Websites that look and perform great on desktops, tablets, and mobile devices for every visitor."
          imagePath="responsive.png"
        />
        <Card
          title="Performance Optimization"
          text="Fast-loading websites that improve user experience, boost search rankings, and reduce visitor drop-off."
          imagePath="performance.png"
        />

        <Card
          title="UI/UX Design"
          text="Thoughtfully designed interfaces focused on usability, accessibility, and creating a smooth customer journey."
          imagePath="uxui.png"
        />

        <Card
          title="Website Maintenance"
          text="Ongoing updates, security improvements, and technical support to keep your website running smoothly."
          imagePath="repair.png"
        />

        <Card
          title="Business Landing Pages"
          text="High-converting landing pages built to showcase your services, generate leads, and grow your business."
          imagePath="money.png"
        />

        <Card
          title="Technical Support"
          text="Reliable troubleshooting and assistance for website issues, hosting, domains, email setup, and more."
          imagePath="techsupport.png"
        />
      </section>
      <div className=" z-10 mt-16 text-center max-w-3xl mx-auto">
        <h4 className="font-bold text-3xl mb-2">Let me make you a site!</h4>

        <p className="text-lg md:text-xl text-white/70">
          From landing pages to full business websites, I help you establish a
          strong online presence and turn visitors into customers.
        </p>
      </div>

      <PricingSection/>

    </div>
  );
}

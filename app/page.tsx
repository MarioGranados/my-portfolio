import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Card from "./components/Card";
import PricingCard from "./components/PricingCards";

export default function Home() {
  const starterFeatures = [
    { id: 1, text: "Up to 5 Pages" },
    { id: 2, text: "Mobile Responsive Design" },
    { id: 3, text: "Contact Form" },
    { id: 4, text: "Basic SEO Setup" },
  ];

  const businessFeatures = [
    { id: 1, text: "Everything in Starter" },
    { id: 2, text: "Up to 15 Pages" },
    { id: 3, text: "Blog Integration" },
    { id: 4, text: "Analytics Setup" },
    { id: 5, text: "Advanced SEO" },
  ];

  const customFeatures = [
    { id: 1, text: "Custom Design" },
    { id: 2, text: "Database Integration" },
    { id: 3, text: "User Accounts" },
    { id: 4, text: "Admin Dashboard" },
    { id: 5, text: "API Integrations" },
  ];

  let textSample: string =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis asperiores possimus nam esse, labore maiores est autem quisquam alias distinctio blanditiis accusantium nemo unde quasi facere! Vero neque laboriosam quasi!";
  return (
    <div className="min-h-screen bg-linear-to-b from from-blue-800 to-black text-white">
      <Navbar />
      <Banner />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Modern Web Design"
          text="Clean, professional websites designed to build trust, improve user experience, and help visitors take action."
          imagePath="file.svg"
        />

        <Card
          title="SEO Optimization"
          text="Built with search engines in mind, helping your website rank higher on Google and attract more potential customers."
          imagePath="globe.svg"
        />

        <Card
          title="Responsive Development"
          text="Websites that look and perform great on desktops, tablets, and mobile devices for every visitor."
          imagePath="next.svg"
        />
        <Card
          title="Performance Optimization"
          text="Fast-loading websites that improve user experience, boost search rankings, and reduce visitor drop-off."
          imagePath="file.svg"
        />

        <Card
          title="UI/UX Design"
          text="Thoughtfully designed interfaces focused on usability, accessibility, and creating a smooth customer journey."
          imagePath="globe.svg"
        />

        <Card
          title="Website Maintenance"
          text="Ongoing updates, security improvements, and technical support to keep your website running smoothly."
          imagePath="next.svg"
        />

        <Card
          title="Business Landing Pages"
          text="High-converting landing pages built to showcase your services, generate leads, and grow your business."
          imagePath="file.svg"
        />

        <Card
          title="Technical Support"
          text="Reliable troubleshooting and assistance for website issues, hosting, domains, email setup, and more."
          imagePath="globe.svg"
        />
      </section>
      <div className="relative z-10 mt-16 text-center max-w-3xl mx-auto">
        <h4 className="font-bold text-3xl mb-2">Let me make you a site!</h4>

        <p className="text-lg md:text-xl text-white/70">
          From landing pages to full business websites, I help you establish a
          strong online presence and turn visitors into customers.
        </p>
      </div>
      <section className="flex flex-col lg:flex-row lg:justify-around">

      <PricingCard
        features={starterFeatures}
        title="Starter Website"
        setupFee="500"
        monthlyHosting="20"
        extraPages="75"
      />

      <PricingCard
        features={businessFeatures}
        title="Business Website"
        setupFee="1500"
        monthlyHosting="35"
        extraPages="50"
      />

      <PricingCard
        features={customFeatures}
        title="Custom Web App"
        setupFee="4000+"
        monthlyHosting="50"
        extraPages="Custom Quote"
      />

      </section>

      <Footer />
    </div>
  );
}

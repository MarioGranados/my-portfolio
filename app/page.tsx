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
        <Card title="Hello" text={textSample} imagePath="file.svg" />
        <Card title="Hello" text={textSample} imagePath="globe.svg" />
        <Card title="Hello" text={textSample} imagePath="next.svg" />
        <Card title="Hello" text={textSample} imagePath="window.svg" />
      </section>
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

      <Footer />
    </div>
  );
}

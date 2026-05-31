import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Card from "./components/Card";
import PricingCard from "./components/PricingCards";

export default function Home() {
  let textSample:string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis asperiores possimus nam esse, labore maiores est autem quisquam alias distinctio blanditiis accusantium nemo unde quasi facere! Vero neque laboriosam quasi!'
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
        links={[
          { id: 1, text: "text" },
          { id: 2, text: "text2" },
        ]}
      />
      <PricingCard
        links={[
          { id: 1, text: "text" },
          { id: 2, text: "text2" },
        ]}
      />
      <PricingCard
        links={[
          { id: 1, text: "text" },
          { id: 2, text: "text2" },
        ]}
      />
      <Footer />
    </div>
  );
}

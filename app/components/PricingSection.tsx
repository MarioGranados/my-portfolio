import { businessFeatures, customFeatures, starterFeatures } from "../utils/utils";
import PricingCard from "./PricingCards";

export default function PricingSection() {

  return (
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
  );
}

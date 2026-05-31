interface Feature {
  id: number;
  text: string;
}

type Props = {
  title: string;
  setupFee: string;
  monthlyHosting: string;
  extraPages: string;
  features: Feature[];
};

export default function PricingCard({
  title,
  setupFee,
  monthlyHosting,
  extraPages,
  features,
}: Props) {
  return (
    <div className="neon mx-5 my-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6">
      <h4 className="text-center text-2xl font-bold mb-4">
        {title}
      </h4>

      <div className="text-center mb-6">
        <p className="text-4xl font-bold">
          ${setupFee}
        </p>
        <p className="text-gray-300">
          One-Time Setup
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <p className="flex justify-between">
          <span>Hosting & Maintenance</span>
          <span>${monthlyHosting}/mo</span>
        </p>

        <p className="flex justify-between">
          <span>Extra Pages</span>
          <span>${extraPages}/page</span>
        </p>
      </div>

      <ul className="flex flex-col gap-2 mb-6">
        {features.map((feature) => (
          <li
            key={feature.id}
            className="flex justify-between items-center p-2"
          >
            <span>{feature.text}</span>
            <span className="text-green-400 font-bold">
              ✓ Included
            </span>
          </li>
        ))}
      </ul>

      <button className="w-full px-5 py-2 rounded-lg text-white bg-white/5 backdrop-blur-lg border border-white/20 hover:bg-white/10 transition">
        Contact Me
      </button>
    </div>
  );
}
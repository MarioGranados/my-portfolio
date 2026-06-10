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
    <div className="neon mx-5 my-10 bg-slate-900/40 backdrop-blur-lg border border-white/10  rounded-2xl shadow-lg p-6">
      <h4 className="text-center text-2xl font-bold mb-4">{title}</h4>

      <div className="text-center mb-6">
        <p className="text-4xl font-bold">${setupFee}</p>
        <p className="text-gray-300">One-Time Setup</p>
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
            <span className="text-green-400 font-bold">✓ Included</span>
          </li>
        ))}
      </ul>

      <button
        className="w-full bg-white/5 bbg-transparent border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg
hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
transition cursor-pointer"
      >
        Contact Me
      </button>
    </div>
  );
}

interface Link {
  id: number;
  text: string;
}

type Props = {
  links: Link[];
};

export default function PricingCard({ links }: Props) {
  return (
    <div className="neon mx-5 my-10 mb-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6">
      <h4 className="text-center text-2xl font-bold my-2">Title</h4>
      <p>Price: 50$USD</p>

      <ul className="flex flex-col items-center">
        {links.map((link) => (
          <li key={link.id} className="w-full p-3  shadow-sm flex justify-between items-center">
            <span className="">{link.text}</span><span>Yes!</span>
          </li>
        ))}
      </ul>
      <button>contact me</button>
    </div>
  );
}
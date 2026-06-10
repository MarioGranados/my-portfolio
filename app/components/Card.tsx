type Props = {
  title: string;
  text: string;
  imagePath: string;
};
export default function Card({ title, text, imagePath }: Props) {
  return (
    <div className="relative w-70 my-5 max-w-md mx-auto">
      {/* image */}
      <div
        className="absolute -top-5 left-4 h-10 w-10 bg-cover bg-center z-10"
        style={{ backgroundImage: `url('/${imagePath}')` }}
      />

      <div
        className="p-10 bg-slate-900/40 backdrop-blur-lg border border-white/10 neon rounded-2xl shadow-lg hover:scale-105 transition duration-150"
      >
        <h5 className="font-bold text-2xl">{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}

type Props = {
    title: string;
    text: string;
    imagePath: string;
}
export default function Card({title, text, imagePath}: Props) {
  return (
    <div className="relative w-80 my-5 max-w-md mx-auto ">
      
      {/* image */}
      <div
        className="absolute -top-5 left-4 h-10 w-10 bg-cover bg-center z-10"
        style={{ backgroundImage: `url('/${imagePath}')` }}
      />

      <div className="p-10 bg-white/10 backdrop-blur-lg border neon border-white/20 rounded-2xl shadow-lg hover:scale-105 transition duration-150">
        <h5 className="font-bold text-2xl">{title}</h5>
        <p>
            {text}
        </p>
      </div>
    </div>
  );
}
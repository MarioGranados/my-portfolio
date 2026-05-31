type Props = {
    title: string;
    text: string;
    imagePath: string;
}
export default function Card({title, text, imagePath}: Props) {
  return (
    <div className="relative w-80 my-5 max-w-md mx-auto neon ">
      
      {/* image */}
      <div
        className="absolute -top-5 left-4 h-10 w-10 bg-cover bg-center rounded z-10"
        style={{ backgroundImage: `url('/${imagePath}')` }}
      />

      <div className="pt-6 px-4 pb-4 mb-5 mr-1.5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6">
        <h5 className="font-bold text-2xl my-2 p-4">{title}</h5>
        <p>
            {text}
        </p>
      </div>
    </div>
  );
}
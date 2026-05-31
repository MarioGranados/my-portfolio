type Props = {
  btnText: string;
};
export default function Button({ btnText }: Props) {
  return (
    <button className="neon-btn px-8 py-2 rounded-lg text-white bg-black/50 backdrop-blur-lg cursor-pointer">
      {btnText}
    </button>
  );
}

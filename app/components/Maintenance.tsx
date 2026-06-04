export default function Maintenance() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-yellow-500/10 border border-yellow-500/30">
            <span className="text-5xl">🚧</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Under Construction
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 mb-8">
          I currently making improvements and adding new features.
          my website will be back online shortly.
        </p>

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-neutral-300">
            Maintenance in Progress
          </span>
        </div>

        <div className="mt-12 text-neutral-500 text-sm">
          Thank you for your patience.
        </div>
      </div>
    </div>
  );
}
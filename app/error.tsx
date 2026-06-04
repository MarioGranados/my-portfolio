"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold">Something went wrong</h1>

      <p className="my-4">{error.message}</p>

      <button
        onClick={() => reset()}
        className="px-4 py-2 border rounded"
      >
        Try Again
      </button>
    </div>
  );
}
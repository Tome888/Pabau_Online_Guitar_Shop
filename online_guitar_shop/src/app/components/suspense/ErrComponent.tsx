"use client";

interface ErrComponentProps {
  errMsg: string;
}

export default function ErrComponent({ errMsg }: ErrComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-20 text-green-500">
      <div className="spinner mb-4" />
      <p className="text-xl font-semibold">Error: {errMsg}</p>
    </div>
  );
}

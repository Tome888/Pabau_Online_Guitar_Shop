"use client";

interface LoadingProps {
  msg: string;
}

export default function Loading({ msg }: LoadingProps) {
  return (
    <div className="flex flex-col items-center mb-50 mt-50 justify-center w-full p-20 text-orange-500">
      <div className="spinner mb-4" />
      <p className="text-xl font-semibold">{msg}</p>
    </div>
  );
}

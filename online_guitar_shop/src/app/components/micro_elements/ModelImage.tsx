"use client";

import { useState } from "react";

const FALLBACK_IMAGE =
  "https://www.fmicassets.com/Damroot/Zoom/10001/9235000560_gtr_frt_001_rr.png";

export default function ModelImage({
  src,
  alt,
}: {
  src: string | null;
  alt: string;
}) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK_IMAGE);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="mb-2 object-contain w-full max-w-[100%] h-[150px]"
      onError={() => {
        if (imgSrc !== FALLBACK_IMAGE) setImgSrc(FALLBACK_IMAGE);
      }}
    />
  );
}

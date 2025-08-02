"use client";

import { useState, useEffect } from "react";

interface ModelImageProps {
  src: string | null;
  alt: string;
  customClass?: string;
}

const FALLBACK_IMAGE =
  "https://www.fmicassets.com/Damroot/Zoom/10001/9235000560_gtr_frt_001_rr.png";

export default function ModelImage({ src, alt, customClass }: ModelImageProps) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK_IMAGE);

  useEffect(() => {
    setImgSrc(src || FALLBACK_IMAGE);
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`mb-2 object-contain w-full max-w-[100%] h-[150px] ${customClass}`}
      onError={() => {
        if (imgSrc !== FALLBACK_IMAGE) setImgSrc(FALLBACK_IMAGE);
      }}
    />
  );
}

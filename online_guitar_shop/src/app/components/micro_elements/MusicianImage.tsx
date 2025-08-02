"use client";

import { useState, useEffect } from "react";

interface MusicianImageProps {
  src: string | null;
  alt: string;
  customClass?: string;
}

const FALLBACK_IMAGE = "/defaultImg.png";

export default function MusicianImage({
  src,
  alt,
  customClass,
}: MusicianImageProps) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK_IMAGE);

  useEffect(() => {
    setImgSrc(src || FALLBACK_IMAGE);
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`w-[90%] h-[90%] ${customClass}`}
      onError={() => {
        if (imgSrc !== FALLBACK_IMAGE) setImgSrc(FALLBACK_IMAGE);
      }}
    />
  );
}

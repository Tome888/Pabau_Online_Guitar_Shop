// "use client";

// import { useState } from "react";

// interface MusicianImageProps {
//   src: string | null;
//   alt: string;
//   customClass?: string;
// }

// const FALLBACK_IMAGE = "/defaultImg.png";
// export default function MusicianImage({
//   src,
//   alt,
//   customClass,
// }: MusicianImageProps) {
//   const [imgSrc, setImgSrc] = useState(src || FALLBACK_IMAGE);

//   return (
//     <img
//       src={imgSrc}
//       alt={alt}
//       className={`mb-2 object-contain w-full max-w-[90%] h-[90%] ${customClass}`}
//       onError={() => {
//         if (imgSrc !== FALLBACK_IMAGE) setImgSrc(FALLBACK_IMAGE);
//       }}
//     />
//   );
// }

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

  // 🔄 Update state when `src` prop changes
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

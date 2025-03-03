"use client";

import { useState } from "react";
import Image from "next/image";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function ZoomableImage({ src, alt, width, height }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg object-cover w-full h-full cursor-pointer"
        onClick={() => setIsZoomed(true)}
      />
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsZoomed(false)}
        >
          <div className="max-w-4xl max-h-full p-4">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={1200}
              height={800}
              className="rounded-lg object-contain max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}

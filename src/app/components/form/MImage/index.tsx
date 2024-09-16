import Image, { type StaticImageData, type ImageProps } from "next/image";
import React from "react";

interface MImage extends ImageProps {
  src: string | StaticImageData;
  alt: string;
  w: number;
  h: number;
  blurUrl?: string;
}

export const MImage = ({
  src,
  alt,
  w,
  h,
  ...rest
}: MImage): React.ReactElement => (
  <Image
    src={src}
    alt={alt}
    width={w}
    height={h}
    priority
    {...rest}
    // placeholder="blur"
    // blurDataURL="/icons/load.gif"
  />
);

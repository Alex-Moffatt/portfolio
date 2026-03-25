import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  caption?: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  unoptimized?: boolean;
};

export default function Image({
  src,
  alt,
  caption,
  fill = false,
  priority = false,
  className,
  unoptimized = false,
}: ImageProps) {
  if (fill) {
    return (
      <figure className={className}>
        <NextImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          unoptimized={unoptimized}
          className="object-cover"
          sizes="100vw"
        />
        {caption && (
          <figcaption className="text-style-body-sm text-text-dark-secondary mt-s">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={className}>
      <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
        <NextImage
          src={src}
          alt={alt}
          fill
          priority={priority}
          unoptimized={unoptimized}
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {caption && (
        <figcaption className="text-style-body-sm text-text-dark-secondary mt-s">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

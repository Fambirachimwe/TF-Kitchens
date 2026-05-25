interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

export function LazyImage({
  src,
  alt,
  className = "",
  loading = "lazy",
}: LazyImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
    />
  );
}

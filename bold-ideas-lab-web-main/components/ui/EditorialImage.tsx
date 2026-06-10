type EditorialImageProps = {
  src: string;
  label: string;
  className?: string;
};

export function EditorialImage({
  src,
  label,
  className = ""
}: EditorialImageProps) {
  return (
    <div
      aria-label={label}
      className={`min-h-[320px] rounded-lg bg-cover bg-center shadow-soft ${className}`}
      role="img"
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

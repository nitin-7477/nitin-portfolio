type ProjectPreviewProps = {
  imageUrl: string;
  label: string;
};

export function ProjectPreview({ imageUrl, label }: ProjectPreviewProps) {
  return (
    <div className="featured-preview">
      <img
        src={imageUrl}
        alt={label}
        loading="lazy"
        className="featured-preview-art"
      />
    </div>
  );
}

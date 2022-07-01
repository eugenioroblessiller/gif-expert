import React from "react";

interface GiffItemProps {
  image: any;
}
export function GiffItem({ image }: GiffItemProps) {
  return (
    <div className="card">
      <img src={image.url} alt={image.url} />
      <p>{image.title}</p>
    </div>
  );
}

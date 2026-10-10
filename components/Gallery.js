"use client";
// Field visit / gallery slider. Shows nothing if the gallery list is empty.
import { useState } from "react";

export default function Gallery({ images }) {
  const [i, setI] = useState(0);
  if (!images || images.length === 0) return null;
  const prev = () => setI((i - 1 + images.length) % images.length);
  const next = () => setI((i + 1) % images.length);
  const img = images[i];

  return (
    <div className="gallery">
      <img src={img.src} alt={img.caption || "Project photo"} className="gallery__img" />
      {images.length > 1 && (
        <>
          <button className="gallery__btn gallery__btn--left" onClick={prev} aria-label="Previous photo">‹</button>
          <button className="gallery__btn gallery__btn--right" onClick={next} aria-label="Next photo">›</button>
        </>
      )}
      {img.caption && <p className="gallery__caption">{img.caption}</p>}
    </div>
  );
}

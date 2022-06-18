import Image from "next/image";

export default function TourCoverImage({ title, src, subtitle, days }) {

  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`} 
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v4CpHgAGaQIiff9TZQAAAABJRU5ErkJggg=="
      layout="fill"
      objectFit="cover" 
    />
  );
  return (
    <div className="tour-cover-image">
      <div className="tour-overlay"></div>
        {image}
        <div className="tour-content page">
        <h1 className="fw-bold text-uppercase">{title}</h1>
        <h2 className="text-capitalize">{subtitle}</h2>
        <h4 className="text-capitalize">{days}</h4>
      </div>
    </div>
  );
}

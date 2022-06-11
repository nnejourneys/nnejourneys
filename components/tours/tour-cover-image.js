import Image from "next/image";

export default function TourCoverImage({ title, src, subtitle, days, slug, height, width }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`} 
      layout="fill"
      objectFit="cover" 
    />
  );
  return (
    <div className="tour-cover-image">
      <div className="tour-overlay"></div>
        {image}
        <div className="tour-content page">
        <h1 className="text-white text-center fw-bold text-uppercase mx-auto">{title}</h1>
        <h2 className="text-white text-center font-weight-bold mx-auto">{subtitle}</h2>
        <h4 className="text-white text-center font-weight-bold text-capitalize mx-auto">{days}</h4>
      </div>
    </div>
  );
}

import Image from 'next/image'
export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width={48}
        height={48}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v4CpHgAGaQIiff9TZQAAAABJRU5ErkJggg=="
        className="avatar"
        alt={name}
      />
      <div className="fw-bold">{name}</div>
    </div>
  )
}

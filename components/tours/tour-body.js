export default function TourBody({ content }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }}/>
    </>
  )
}

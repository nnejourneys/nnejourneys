export default function TourBody({ content }) {
  return (
    <>
    <h4>Summary</h4>
      <div className="tour-body mt-4" dangerouslySetInnerHTML={{ __html: content }}/>
    </>
  )
}

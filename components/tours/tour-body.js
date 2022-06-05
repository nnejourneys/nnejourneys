// import markdownStyles from './markdown-styles.module.css'

export default function TourBody({ content }) {
  return (
    <div className="my-5">
      <div 
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

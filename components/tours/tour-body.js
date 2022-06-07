// import markdownStyles from './markdown-styles.module.css'

export default function TourBody({ content }) {
  return (
    < >
      <div 
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </ >
  )
}

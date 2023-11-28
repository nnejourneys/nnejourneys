
export default function PostBody({ content }) {
  return (
    <div className="mx-auto">
      <div className="post-body"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

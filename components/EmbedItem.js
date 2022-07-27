function EmbedItem({ url }) {
  return (
    <iframe
      className="aspect-video w-full rounded-lg"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allowFullScreen
    />
  )
}

export default EmbedItem

export default function YoutubeEmbed({ videoId }) {
    return (
        <div style={{ aspectRatio: '16/9', width: '100%' }}>
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 'none' }}
            />
        </div>
    )
}

export default function VideoPlayerControls({ newVideoProp }) {
    return (
        <video
            width="100%"
            style={{ aspectRatio: "16/9" }}
            playsInline
            muted>
            <source src={newVideoProp} type="video/mp4" />
            <track
                kind="subtitles"
                src="/captions/demo.en.vtt"
                srcLang="en"
                label="English"
                default
            />
            Your browser does not support the video tag.
        </video>
    )
}

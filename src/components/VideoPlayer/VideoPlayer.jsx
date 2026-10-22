import newVideo from './videos/newVideo.mp4';

export default function VideoPlayer() {
    return (
        <video
            width="100%"
            style={{ aspectRatio: "16/9" }}
            controls
            playsInline
            muted>
            <source src={newVideo} type="video/mp4" />
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
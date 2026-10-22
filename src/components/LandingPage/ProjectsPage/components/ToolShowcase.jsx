import VideoPlayer from "../../../VideoPlayer/VideoPlayer";

export default function ToolShowcase({ tool }) {
    return (
        <div>
            Tool Showcase: {tool}

            <VideoPlayer tool={tool} />
        </div>
    )
}
    
import VideoPlayer from "../../../VideoPlayer/Videoplayer";
export default function ToolShowcase({ tool }) {
    return (
        <div>
            Tool Showcase: {tool}

            <VideoPlayer tool={tool} />
        </div>
    )
}
    
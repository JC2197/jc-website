import VideoCarousel from "../../../GlobalElements/VideoCarousel/VideoCarousel.jsx";
import { projects } from "../models/projects";
import videos from "../../../VideoPlayer/videos/Video.js";


export default function KingsAndHeroesPage() {
    const activeProject = projects.kings-and-heroes;
    const pageVideos = videos.kings-and-heroes;
    

    return (
        <div className="center-column">
            <h1>{activeProject.title}</h1>
            <div className="paragraph-container">
                {activeProject.description.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <h1>Videos</h1>
            <VideoCarousel pageVideos={pageVideos} />


        </div>
    )
}

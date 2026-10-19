import BasicButton from "../GlobalElements/BasicButton";
import UnityPlayer from "../UnityPlayer/UnityPlayer";
import { projects } from "../../content/projects";
const project = projects.heltower;

function ProjectSection({ onBack }) {
    return (
        <div className="center-column">
            <h1>{project.title}</h1>
            {project.description.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <UnityPlayer />
            <BasicButton onClick={onBack}>Back</BasicButton>
        </div>
    )
}

export default ProjectSection;
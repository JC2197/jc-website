import { projects } from "../models/projects";

export default function HeltowerPage() {
    const activeProject = projects.heltower;
    return (
        <div className="center-column">
            <h1>{activeProject.title}</h1>
            <div width="50%">
                {activeProject.description.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    )
}
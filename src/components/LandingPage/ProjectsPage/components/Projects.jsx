import BasicButton from "../../../GlobalElements/BasicButton";
import UnityPlayer from "../../../UnityPlayer/UnityPlayer";
import { projects } from "../models/projects";
import ProjectsTabRow from "./ProjectsTabRow";
import { useState } from "react";
import { div } from "framer-motion/client";
import HeltowerPage from "./HeltowerPage";
import ToolShowcase from "./ToolShowcase";



function ProjectSection({ onBack }) {

    const [activeProject, setActiveProject] = useState(projects.heltower);
    return (
        <div className="center-column">
            <h1>Projects</h1>
            <ProjectsTabRow
                activeProject={activeProject}
                onSelect={setActiveProject}
            />
            {activeProject === "heltower" && <HeltowerPage />}
            {activeProject === "tools" && <ToolShowcase />}

            <BasicButton onClick={onBack}>Back</BasicButton>
        </div>

    );
}

export default ProjectSection;
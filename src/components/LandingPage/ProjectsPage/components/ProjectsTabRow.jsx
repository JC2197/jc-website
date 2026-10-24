import BasicButton from "../../../GlobalElements/BasicButton";

export default function ProjectsTabRow({ activeProject, onSelect }) {
    return (
        <nav className="projects-tab-row">
            <BasicButton
                aria-pressed={activeProject === "heltower"}
                onClick={() => onSelect("heltower")}
            >
                Heltower
            </BasicButton>

            <BasicButton
                aria-pressed={activeProject === "tools"}
                onClick={() => onSelect("tools")}
            >
                Tools Showcase
            </BasicButton>
        </nav>
    );
}
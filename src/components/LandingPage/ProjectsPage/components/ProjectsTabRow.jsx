

export default function ProjectsTabRow({ activeProject, onSelect }) {
    return (
        <nav className="projects-tab-row">
            <button
                type="button"
                aria-pressed={activeProject === "heltower"}
                onClick={() => onSelect("heltower")}
            >Heltower</button>

            <button
                type="button"
                aria-pressed={activeProject === "anotherProject"}
                onClick={() => onSelect("tools")}
            >Tools Showcase
            </button>
        </nav>
    )
}
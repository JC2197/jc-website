import BasicButton from "../../../GlobalElements/BasicButton";

export default function ProjectsTabRow({ activeCategory, onSelect }) {
    return (
        <nav className="projects-tab-row">
            <BasicButton
                aria-pressed={activeCategory === "music"}
                onClick={() => onSelect("music")}
            >
                Music
            </BasicButton>

            <BasicButton
                aria-pressed={activeCategory === "games-software"}
                onClick={() => onSelect("games-software")}
            >
                Games
            </BasicButton>
        </nav>
    );
}